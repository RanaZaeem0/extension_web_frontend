import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Pricing from "../../components/pricing/Pricing";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
// import Navbar from "./components/navbar/";
// import Hero from "./components/hero/Hero";
// import Features from "./components/features/Features";
// import HowItWorks from "./components/howitworks/HowItWorks";
// import Pricing from "./components/pricing/Pricing";
// import Testimonials from "./components/testimonials/Testimonials";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = (): void => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen font-sans antialiased scroll-smooth transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} overflow-x-hidden`}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <HowItWorks darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;