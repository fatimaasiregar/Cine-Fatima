import React, { useState, useEffect,useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Event from "./pages/Event";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); 

  return (
    <Router>
      <Routes>
        {/* Halaman Login */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Jika sudah login */}
        {/* {isLoggedIn &&  ( */}
          <>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/movies" element={<Layout><Movies /></Layout>} />
            <Route path="/event" element={<Layout><Event /></Layout>} />

          </>
             {/* )}  */}

        {/* Redirect ke login jika belum login */}
        {!isLoggedIn && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
