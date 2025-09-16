import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    window.location.reload(); // optional
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-yellow-400">
          Cine<span className="text-white">Fatima</span>
        </Link>

        <nav>
          <ul className="flex space-x-4">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
