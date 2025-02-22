import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const scaleFade = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const pulse = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.1, 1], transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity } },
};

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-teal-50 to-gray-200 dark:from-gray-900 dark:via-teal-950 dark:to-gray-800 transition-colors duration-300">
      <div className="text-center px-4 sm:px-6 max-w-lg">
        {/* Icon before 404 with Pulse Animation */}
        <motion.div
          variants={pulse}
          initial="initial"
          animate="animate"
          className="mb-6 text-teal-600 dark:text-teal-400"
        >
          <FaExclamationTriangle size={60} className="mx-auto" />
        </motion.div>

        {/* 404 Text with Animation */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-6xl sm:text-8xl font-extrabold text-teal-600 dark:text-teal-400 mb-6 tracking-wider"
        >
          404
        </motion.h1>

        {/* Message with Animation */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-lg sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light"
        >
          Oops! Looks like this page took a wrong turn.
        </motion.p>

        {/* Go Back Button with Animation */}
        <motion.button
          variants={scaleFade}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoBack}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 mx-auto bg-teal-900/80 text-white hover:bg-teal-950/80 dark:bg-teal-800/80 dark:hover:bg-teal-900/80 shadow-lg transition-all duration-300 backdrop-blur-lg"
        >
          <FaHome /> Go Back Home
        </motion.button>
      </div>
    </div>
  );
};

export default NotFound;