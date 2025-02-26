import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaUser, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { User } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../../utils/constant/constant";

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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { user } = useSelector((state: RootState) => state.auth);

  const navLinks = [
    { name: "Home", id: "home", to: "/" },
    { name: "Features", id: "features" ,to:"/features"},
    { name: "Pricing", id: "pricing" ,to:"/pricing"},
    { name: "Testimonials", id: "testimonials", to: "/testimonials" },
    { name: "Contact", id: "contact" ,to:"/contact"},
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/logout`, 
        {}, // Empty object for body (if no body is needed)
        {
          withCredentials: true, // Pass this as a config, NOT in the body
        }
      );
  
      if (response.status >= 200 && response.status < 300) {
        console.log("User logged out successfully");
        window.location.reload()
      }
    } catch (error) {
      console.log(`Logout error: ${error}`);
    }
  };
  

  return (
    <>
      <nav className={`fixed w-full z-50 backdrop-blur-lg ${darkMode ? "bg-gray-900/85 text-white" : "bg-teal-900/85 text-white"} shadow-md `}>
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-5 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-4">
              <h1 className="text-lg sm:text-2xl font-extrabold tracking-wide">WhatsApp Sender</h1>
              <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${darkMode ? "bg-teal-600/90" : "bg-teal-500/90"} text-white`}>v1.0</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8 sm:gap-12">
              {navLinks.map((item) => (
             <Link to={item.to}>
                 <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm sm:text-base font-medium hover:text-teal-300 transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
             </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "hover:bg-gray-800/90" : "hover:bg-teal-950/90"}`}>
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>

              {user ?
              (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center focus:outline-none"
                  >
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border-2 border-teal-400 hover:border-teal-300 transition-colors duration-300"
                    />
                  </button>

                  {isProfileOpen && (
                    <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 ${darkMode ? "bg-gray-800" : "bg-teal-800"}`}>
                      <div className="px-4 py-2 border-b border-gray-700">
                        <p className="text-sm font-semibold truncate">{user.name}</p>
                        <p className="text-xs text-gray-300 truncate">{user.email}</p>
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-teal-700/50 transition-colors duration-300"
                      >
                        <User className="text-teal-400 text-sm" />
                        Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-teal-700/50 transition-colors duration-300"
                      >
                        <FaTachometerAlt className="text-teal-400" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-teal-700/50 transition-colors duration-300"
                      >
                        <FaSignOutAlt className="text-teal-400" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )
              :  <Link to={'/login'}>
              <button
               className="text-sm sm:text-base font-medium hover:text-teal-300 transition-colors duration-300 relative group cursor-pointer"
             >
                 Login
               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
             </button>
          </Link>
              }

              <button className="lg:hidden text-xl sm:text-2xl cursor-pointer" onClick={() => setIsSidebarOpen(true)} aria-label="Open menu">
                <FaBars />
              </button>
            </div>
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
              {user && (
                <div className="flex items-center gap-3 pb-6 border-b border-gray-700 w-full">
                  <img src={user.photo} alt={user.name} className="w-10 h-10 rounded-full border-2 border-teal-400" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-300 truncate">{user.email}</p>
                  </div>
                </div>
              )}
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
              {user && (
                <>
                 <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-base sm:text-lg hover:text-teal-300 transition-colors duration-300 w-full"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <User /> profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-base sm:text-lg hover:text-teal-300 transition-colors duration-300 w-full"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <FaTachometerAlt /> Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      
                    }}
                    className="flex items-center gap-2 text-base sm:text-lg hover:text-teal-300 transition-colors duration-300 w-full text-left"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsSidebarOpen(false);
                }}
                className="flex items-center gap-2 text-base sm:text-lg hover:text-teal-300 transition-colors duration-300 cursor-pointer text-left w-full"
              >
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