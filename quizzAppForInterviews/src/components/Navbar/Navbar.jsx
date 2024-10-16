import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <a href="">Home</a>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Contact Us</a></li>
          <li>More</li>
        </ul>
      </div>
      <div>
        <p>profile</p>
      </div>
    </div>
  );
};

export default Navbar;
