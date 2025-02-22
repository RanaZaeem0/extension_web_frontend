import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPaperPlane, FaFileAlt, FaClock } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Features Props Interface
interface FeaturesProps {
  darkMode: boolean;
}

const features = [
  {
    title: "Instant Messaging",
    icon: <FaPaperPlane size={40} />,
    desc: "Send messages directly from your browser effortlessly.",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1726414835486/02e1e658-462d-4c02-959f-35abb036fb8c.png?auto=format",
  },
  {
    title: "Reusable Templates",
    icon: <FaFileAlt size={40} />,
    desc: "Save time with customizable templates.",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1726394565489/fc3f40c9-344a-48ac-829d-68f639bcd3da.png?auto=format",
  },
  {
    title: "Message Scheduling",
    icon: <FaClock size={40} />,
    desc: "Schedule messages for optimal timing.",
    image: "https://www.pikchat.co/wp-content/uploads/2022/11/How-can-your-Business-Benefit-from-Instant-Messaging-Applications.jpg",
  },
];

const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Adjusted for mobile

  return (
    <section id="features" className={`py-16 sm:py-32 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"} overflow-x-hidden`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate" // Always animate heading
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-20 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Why Choose WhatsApp Sender?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, ...(index === 1 ? { x: -60 } : index === 2 ? { x: 60 } : {}) }}
              animate={isInView ? { opacity: 1, y: 0, x: 0, transition: { duration: 1, ease: "easeOut" } } : {}}
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-opacity-20 ${darkMode ? "bg-gray-800/20 border-gray-700/50" : "bg-teal-100/20 border-teal-300/50"} border shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300`}
            >
              <img src={feat.image} alt={feat.title} className="w-full h-40 sm:h-52 object-contain rounded-t-2xl mb-4 sm:mb-6" />
              <div className={`flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                {feat.icon}
                <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{feat.title}</h3>
              </div>
              <p className={`text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;