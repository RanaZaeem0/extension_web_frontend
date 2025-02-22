import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaStar, FaRocket, FaUsers, FaCheck } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Pricing Props Interface
interface PricingProps {
  darkMode: boolean;
}

const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Reduced to 0.1 for mobile sensitivity

  return (
    <section id="pricing" className={`py-16 sm:py-32 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-teal-50"} overflow-x-hidden`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate" // Always animate heading
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              plan: "Basic Plan",
              price: "$12.99",
              period: "/month",
              features: ["1 WhatsApp Account", "Unlimited Messages", "Real-Time Sending Progress", "Upload Excel", "Send Attachments", "Custom Group"],
              icon: <FaStar />,
            },
            {
              plan: "Pro Plan",
              price: "$18.99",
              period: "/month",
              features: ["3 WhatsApp Accounts", "All Basic Features", "Export Group Members", "Send Personalized Messages"],
              icon: <FaRocket />,
            },
            {
              plan: "Premium Plan",
              price: "$24.99",
              period: "/month",
              features: ["5 WhatsApp Accounts", "All Pro Features", "Number Replacement", "Auto Remove Invalid Chats"],
              icon: <FaUsers />,
            },
          ].map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: index * 0.2 } } : { opacity: 0, y: 60 }}
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-opacity-20 ${darkMode ? "bg-gray-800/20 border-gray-700/50" : "bg-teal-100/20 border-teal-300/50"} border shadow-md flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-auto`}
            >
              <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 flex justify-center ${darkMode ? "text-teal-400" : "text-teal-600"}`}>{tier.icon}</div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>{tier.plan}</h3>
              <div className="text-center mb-3 sm:mb-4">
                <p className={`text-2xl sm:text-3xl font-bold ${darkMode ? "text-teal-400" : "text-teal-600"}`}>{tier.price}<span className="text-sm sm:text-base font-normal">{tier.period}</span></p>
              </div>
              <ul className={`mb-4 sm:mb-6 space-y-2 sm:space-y-3 text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-700"} flex-grow`}>
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className={`text-teal-500 ${darkMode ? "text-teal-400" : "text-teal-600"}`} /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base text-white font-semibold transition-all duration-300 backdrop-blur-lg cursor-pointer ${
                  darkMode ? "bg-teal-800/80 hover:bg-teal-900/80" : "bg-teal-900/80 hover:bg-teal-950/80"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;