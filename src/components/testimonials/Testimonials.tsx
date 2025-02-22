import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Testimonials Props Interface
interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Adjusted for mobile

  return (
    <section id="testimonials" className={`py-16 sm:py-32 transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-white"} overflow-x-hidden`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate" // Always animate heading
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-20 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {[
            {
              name: "Ali R.",
              text: "This extension saved me hours! No more app-switching. It’s incredibly easy to use and integrates seamlessly with my workflow. Highly recommend it to anyone looking to streamline their messaging!",
              rating: 5,
              image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1726312312894/d9720485-1496-45a9-bfbd-55e100754628.png?auto=format",
            },
            {
              name: "Fatima S.",
              text: "Scheduling messages is a game-changer for my business. I can now plan campaigns ahead of time and automate responses. The support team is also fantastic—quick and helpful!",
              rating: 5,
              image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1726324301242/76e6ea4f-84e1-4e09-b0ff-bcf7a0f55f33.png?auto=format",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } } : {}}
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-opacity-20 ${darkMode ? "bg-gray-700/20 border-gray-600/50" : "bg-teal-100/20 border-teal-300/50"} border shadow-md flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover" />
                <div>
                  <p className={`font-semibold text-sm sm:text-base ${darkMode ? "text-teal-400" : "text-teal-600"}`}>{testimonial.name}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className={`text-xs sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"} flex-grow`}>{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;