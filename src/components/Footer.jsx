import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Copyright and main info */}
        <div className="text-center mb-6">
          <p className="text-lg font-bold text-yellow-400 mb-2">
            &copy; 2024 Movie Admin Panel | All Rights Reserved
          </p>
          <p className="text-sm text-gray-400">
            Made with <span className="text-red-500">❤️</span> by Movie CineFatima
          </p>
        </div>

        {/* App description */}
        <div className="max-w-3xl mx-auto text-center mb-8 px-4">
          <p className="text-gray-400 leading-relaxed">
            Movie Admin Panel is a powerful tool to manage and organize your movie collection with ease. 
            It allows you to view, edit, and filter movies, providing an efficient admin experience.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>

        {/* Additional footer links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact Us</a>
          <span>•</span>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;