import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  function handlelogout(){
    localStorage.removeItem("isLoggedIn")
    location.reload()
  }

  return (
    <header className="header">
      <div className="cinefatima-header">
        <h1>Cinefatima</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><a href='#' onClick={handlelogout}>Logout</a></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
