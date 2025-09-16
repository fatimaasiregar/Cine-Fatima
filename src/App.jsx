import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Event from "./pages/Event";

// Layout wrapper tanpa Header
const Layout = ({ children }) => (
  <main className="min-h-[calc(100vh-100px)]">{children}</main> // Footer tetap di bawah
);

// ProtectedRoute
const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {/* Header hanya muncul sekali */}
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <Routes>
        {/* Login page */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Protected pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Layout>
                <About />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Layout>
                <Movies />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/event"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Layout>
                <Event />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Redirect semua route lain ke login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      {/* Footer hanya satu */}
      <Footer />
    </Router>
  );
};

export default App;
