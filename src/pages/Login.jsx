import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", true); // Fixed: Changed from false to true
      setIsLoggedIn(true);
      navigate("/"); // Changed from navigate(0) to navigate to home
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Movie-themed header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2 font-cinzel">CineFatima</h1>
          <p className="text-gray-300">Your Ultimate Movie Experience</p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Card Header */}
          <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
            <h2 className="text-2xl font-semibold text-white text-center">Admin Login</h2>
          </div>

          {/* Card Body */}
          <form onSubmit={handleLogin} className="p-6 space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Login
              </button>
            </div>
          </form>

          {/* Card Footer */}
          <div className="bg-gray-700 px-6 py-4 border-t border-gray-600 text-center">
            <p className="text-sm text-gray-400">
              For demo use: <span className="text-yellow-400">admin</span> / <span className="text-yellow-400">password</span>
            </p>
          </div>
        </div>

        {/* Theater-style decoration */}
        <div className="flex justify-between mt-8">
          <div className="h-1 bg-yellow-500 rounded-full w-1/4"></div>
          <div className="h-1 bg-yellow-500 rounded-full w-1/4"></div>
          <div className="h-1 bg-yellow-500 rounded-full w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;