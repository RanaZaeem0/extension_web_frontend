import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

// Smooth Scroll Function (Defined locally in Footer)
const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

// Footer Props Interface
interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 sm:py-12 text-white transition-colors duration-300 backdrop-blur-lg ${darkMode ? "bg-gray-900/90" : "bg-teal-900/90"} overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">WhatsApp Sender</h3>
          <p className="text-xs sm:text-sm">Enhance your messaging experience with our Chrome extension. Built for speed and simplicity since 2025.</p>
          <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6">
            <a href="#" className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"><FaGithub size={20} /></a>
            <a href="#" className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"><FaLinkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {["Home", "Features", "Pricing", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <button onClick={() => scrollToSection(link.toLowerCase())} className="hover:text-teal-300 transition-colors duration-300 cursor-pointer">{link}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {["FAQs", "Support Center", "Privacy Policy", "Terms of Service"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-teal-300 transition-colors duration-300 cursor-pointer">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h4>
          <p className="text-xs sm:text-sm flex items-center gap-2 mb-2 sm:mb-3"><FaEnvelope /> support@whatsappsender.com</p>
          <p className="text-xs sm:text-sm flex items-center gap-2 mb-4 sm:mb-6"><FaPhone /> +1-555-123-4567</p>
          <button className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 backdrop-blur-lg cursor-pointer ${darkMode ? "bg-teal-800/80 hover:bg-teal-900/80" : "bg-teal-900/80 hover:bg-teal-950/80"}`}>
            Subscribe to Updates
          </button>
        </div>
      </div>
      <div className={`mt-8 sm:mt-12 text-center text-xs sm:text-sm pt-4 sm:pt-6 ${darkMode ? "border-t border-gray-700" : "border-t border-teal-900"}`}>
        <p>© 2025 WhatsApp Sender. All rights reserved.</p>
        <p className="text-[10px] sm:text-xs mt-2">Not affiliated, endorsed, or sponsored by WhatsApp Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;