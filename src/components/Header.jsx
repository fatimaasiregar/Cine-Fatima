import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <header className="bg-gray-900 text-white shadow-lg w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-yellow-400">
          Cine<span className="text-white">Fatima</span>
        </Link>

        <nav>
          <ul className="flex space-x-6 items-center">
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/" className="hover:text-yellow-400">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400">About</Link>
                </li>
                <li>
                  <Link to="/movies" className="hover:text-yellow-400">Movies</Link>
                </li>
                <li>
                  <Link to="/event" className="hover:text-yellow-400">Event</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-400 hover:text-red-300">
                    Logout
                  </button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li>
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
