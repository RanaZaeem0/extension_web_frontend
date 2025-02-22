import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Hero Props Interface
interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <motion.section
      variants={fadeInUp}
      id="home"
      initial="initial"
      animate="animate" // Always animate on load
      className={`min-h-screen flex items-center justify-center pt-24 transition-colors duration-300 backdrop-blur-sm overflow-x-hidden ${
        darkMode ? "bg-gradient-to-br from-gray-900 via-teal-950/50 to-gray-800 text-white" : "bg-gradient-to-br from-teal-100 via-teal-50 to-teal-200 text-gray-900"
      }`}
    >
      <div className="text-center px-4 sm:px-6 max-w-5xl">
        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Send WhatsApp Messages Seamlessly
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light ${darkMode ? "text-gray-200" : "text-gray-800"}`}
        >
          Automate messaging, manage contacts, and boost productivity with WhatsApp Sender.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-lg cursor-pointer ${
              darkMode ? "bg-teal-800/80 text-white hover:bg-teal-900/80" : "bg-teal-900/80 text-white hover:bg-teal-950/80"
            }`}
          >
            <FaDownload /> Install Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-lg cursor-pointer ${
              darkMode ? "border-teal-400 text-teal-400 hover:bg-teal-900/80 hover:text-white" : "border-teal-700 text-teal-700 hover:bg-teal-900/80 hover:text-white"
            }`}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;