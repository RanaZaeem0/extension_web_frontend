import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt } from "react-icons/fa";

// Animation Variants
const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const scaleFade = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

// HowItWorks Props Interface
interface HowItWorksProps {
  darkMode: boolean;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ darkMode }) => {
  return (
    <section id="how-it-works" className={`py-16 sm:py-32 transition-colors duration-300 backdrop-blur-sm ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-teal-50 to-teal-100"} overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-12">
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }} // Adjusted for mobile
          className="lg:w-1/2"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>How It Works</h2>
          <p className={`text-sm sm:text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Install the extension, connect your WhatsApp, and start sending messages directly from Chrome. Customize templates, schedule sends, and manage chats—all in one place.
          </p>
          <ul className={`space-y-3 sm:space-y-4 text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <li className="flex items-center gap-2 sm:gap-3"><FaRocket className="text-teal-500" /> Quick setup in under a minute</li>
            <li className="flex items-center gap-2 sm:gap-3"><FaShieldAlt className="text-teal-500" /> Secure and private messaging</li>
          </ul>
        </motion.div>
        <motion.div
          variants={scaleFade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }} // Adjusted for mobile
          className={`lg:w-1/2 h-52 sm:h-64 rounded-2xl flex items-center justify-center ${darkMode ? "bg-gray-700/50" : "bg-teal-200/50"} backdrop-blur-lg`}
        >
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726394565489/fc3f40c9-344a-48ac-829d-68f639bcd3da.png?auto=format"
            alt="How It Works"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;