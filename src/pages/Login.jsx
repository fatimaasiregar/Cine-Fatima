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
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2 font-cinzel">CineFatima</h1>
          <p className="text-gray-300">Your Ultimate Movie Experience</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
            <h2 className="text-2xl font-semibold text-white text-center">Admin Login</h2>
          </div>

          <form onSubmit={handleLogin} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="bg-gray-700 px-6 py-4 border-t border-gray-600 text-center">
            <p className="text-sm text-gray-400">
              Demo: <span className="text-yellow-400">admin</span> / <span className="text-yellow-400">password</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
