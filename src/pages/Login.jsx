import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/"); // redirect ke home
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2 font-cinzel">
            CineFatima
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Your Ultimate Movie Experience
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
              Admin Login
            </h2>
          </div>

          <form onSubmit={handleLogin} className="p-6 sm:p-8 md:p-10 space-y-6">
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="bg-gray-700 px-6 py-4 border-t border-gray-600 text-center text-sm sm:text-base">
            <p className="text-gray-400">
              Demo: <span className="text-yellow-400">admin</span> /{" "}
              <span className="text-yellow-400">123456</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
