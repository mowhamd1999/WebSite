import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
const searchHandler = () => {
  window.prompt("search");
};
const Header = () => {
  return (
    <div className="Header">
      <div className="Navbar">
        <div className="Navbar_title">
          <h2>MyFood</h2>
        </div>
        <div className="Navbar_link">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to='./Foods'>
              <li>Recipes</li>
            </Link>
            <a href="">
              <li>Tips</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
            <li>
              <IoSearchOutline
                className="Navbar-search"
                onClick={searchHandler}
              />
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
