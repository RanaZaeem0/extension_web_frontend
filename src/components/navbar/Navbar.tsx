import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

// Animation Variants
const sidebarVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

// Smooth Scroll Function
const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Navbar Props Interface
interface NavbarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, darkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 backdrop-blur-lg ${darkMode ? "bg-gray-900/85 text-white" : "bg-teal-900/85 text-white"} shadow-md overflow-x-hidden`}>
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-5 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-4">
              <h1 className="text-lg sm:text-2xl font-extrabold tracking-wide">WhatsApp Sender</h1>
              <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${darkMode ? "bg-teal-600/90" : "bg-teal-500/90"} text-white`}>v1.0</span>
            </Link>
          </div>
          <button className="lg:hidden text-xl sm:text-2xl cursor-pointer" onClick={() => setIsSidebarOpen(true)} aria-label="Open menu">
            <FaBars />
          </button>
          <div className="hidden lg:flex items-center gap-8 sm:gap-12">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm sm:text-base font-medium hover:text-teal-300 transition-colors duration-300 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "hover:bg-gray-800/90" : "hover:bg-teal-950/90"}`}>
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {isSidebarOpen && (
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`fixed inset-y-0 right-0 w-72 z-50 backdrop-blur-lg ${darkMode ? "bg-gray-900/95 text-white" : "bg-teal-900/95 text-white"} shadow-md`}
        >
          <div className="p-6 flex flex-col h-full">
            <button className="text-2xl sm:text-3xl mb-6 self-end cursor-pointer" onClick={() => setIsSidebarOpen(false)} aria-label="Close menu">
              ✕
            </button>
            <div className="flex flex-col gap-6 items-start">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className="text-base sm:text-lg font-medium hover:text-teal-300 transition-colors duration-300 text-left w-full cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={toggleTheme} className="flex items-center gap-2 text-base sm:text-lg hover:text-teal-300 transition-colors duration-300 cursor-pointer text-left w-full">
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />} {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />}
    </>
  );
};

export default Navbar;