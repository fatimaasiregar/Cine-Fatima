import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Movie Admin Panel | All Rights Reserved</p>
        
        {/* Penjelasan tentang aplikasi */}
        <div className="app-description">
          <p>
            Movie Admin Panel is a powerful tool to manage and organize your movie collection with ease. It allows you to view, edit, and filter movies, providing an efficient admin experience.
          </p>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        
        <p className="footer-text">Made with ❤️ by Movie CineFatima</p>
      </div>
    </footer>
  );
};

export default Footer;
