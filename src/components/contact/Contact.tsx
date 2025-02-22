import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Contact Props Interface
interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-16 sm:py-32 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-teal-50"} overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate" // Always animate heading
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-20 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }} // Adjusted for mobile
            className={`p-4 sm:p-8 rounded-2xl backdrop-blur-lg bg-opacity-20 ${darkMode ? "bg-gray-800/20 border-gray-700/50" : "bg-teal-100/20 border-teal-300/50"} border shadow-md`}
          >
            <h3 className={`text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Send Us a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className={`block text-xs sm:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Name</label>
                <input
                  type="text"
                  id="name"
                  className={`mt-1 w-full p-2 sm:p-3 rounded-lg backdrop-blur-md ${darkMode ? "bg-gray-700/50 text-white border-gray-600" : "bg-teal-100/50 text-gray-900 border-teal-300"} border focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-xs sm:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 w-full p-2 sm:p-3 rounded-lg backdrop-blur-md ${darkMode ? "bg-gray-700/50 text-white border-gray-600" : "bg-teal-100/50 text-gray-900 border-teal-300"} border focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm`}
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-xs sm:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`mt-1 w-full p-2 sm:p-3 rounded-lg backdrop-blur-md ${darkMode ? "bg-gray-700/50 text-white border-gray-600" : "bg-teal-100/50 text-gray-900 border-teal-300"} border focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm`}
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className={`w-full px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base text-white font-semibold transition-all duration-300 backdrop-blur-lg cursor-pointer ${
                  darkMode ? "bg-teal-800/80 hover:bg-teal-900/80" : "bg-teal-900/80 hover:bg-teal-950/80"
                }`}
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }} // Adjusted for mobile
            className={`p-4 sm:p-8 rounded-2xl backdrop-blur-lg bg-opacity-20 ${darkMode ? "bg-gray-800/20 border-gray-700/50" : "bg-teal-100/20 border-teal-300/50"} border shadow-md`}
          >
            <h3 className={`text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Details</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <FaEnvelope className={`text-teal-500 ${darkMode ? "text-teal-400" : "text-teal-600"}`} /> support@whatsappsender.com
              </p>
              <p className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <FaPhone className={`text-teal-500 ${darkMode ? "text-teal-400" : "text-teal-600"}`} /> +1-555-123-4567
              </p>
              <p className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <FaMapMarkerAlt className={`text-teal-500 ${darkMode ? "text-teal-400" : "text-teal-600"}`} /> 123 Tech Street, Future City, FC 45678
              </p>
              <div>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Support Hours:</p>
                <p className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Monday - Friday: 9 AM - 6 PM (EST)</p>
                <p className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Saturday: 10 AM - 2 PM (EST)</p>
              </div>
              <div>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Quick Links:</p>
                <a href="#faqs" className={`text-xs sm:text-sm ${darkMode ? "text-teal-400 hover:text-teal-300" : "text-teal-600 hover:text-teal-500"} transition-colors duration-300 cursor-pointer`}>FAQs</a>
                <span className="mx-2">|</span>
                <a href="#support" className={`text-xs sm:text-sm ${darkMode ? "text-teal-400 hover:text-teal-300" : "text-teal-600 hover:text-teal-500"} transition-colors duration-300 cursor-pointer`}>Support Center</a>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <a href="#" className={`hover:text-teal-300 transition-colors duration-300 cursor-pointer ${darkMode ? "text-teal-400" : "text-teal-600"}`}><FaFacebook size={20} /></a>
                <a href="#" className={`hover:text-teal-300 transition-colors duration-300 cursor-pointer ${darkMode ? "text-teal-400" : "text-teal-600"}`}><FaTwitter size={20} /></a>
                <a href="#" className={`hover:text-teal-300 transition-colors duration-300 cursor-pointer ${darkMode ? "text-teal-400" : "text-teal-600"}`}><FaGithub size={20} /></a>
                <a href="#" className={`hover:text-teal-300 transition-colors duration-300 cursor-pointer ${darkMode ? "text-teal-400" : "text-teal-600"}`}><FaLinkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;