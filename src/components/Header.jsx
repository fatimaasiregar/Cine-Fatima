import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ isLoggedIn, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg w-full fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold text-yellow-400">
          Cine<span className="text-white">Fatima</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 items-center">
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400 transition duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/movies" className="hover:text-yellow-400 transition duration-200">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/event" className="hover:text-yellow-400 transition duration-200">
                    Event
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 transition duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300 transition duration-200">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition duration-200" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400 transition duration-200" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/movies" className="hover:text-yellow-400 transition duration-200" onClick={toggleMenu}>
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/event" className="hover:text-yellow-400 transition duration-200" onClick={toggleMenu}>
                    Event
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="text-red-400 hover:text-red-300 transition duration-200 text-left w-full"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300 transition duration-200" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
