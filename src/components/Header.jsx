import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  function handlelogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Brand */}
        <div className="cinefatima-header mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-yellow-400 font-cinzel tracking-wide">
              Cine<span className="text-white">Fatima</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center space-x-1 md:space-x-6">
            <li>
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/movies" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link 
                to="/event" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300"
              >
                Events
              </Link>
            </li>
<li>
  <button
    onClick={() => {
      localStorage.removeItem("isLoggedIn");
      navigate("/Login"); // Redirect to login page
      window.location.reload(); // Optional: refresh to reset state
    }}
    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-gray-800 hover:text-red-300 transition-colors duration-300"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" 
        clipRule="evenodd" 
      />
    </svg>
    Logout
  </button>
</li>          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;