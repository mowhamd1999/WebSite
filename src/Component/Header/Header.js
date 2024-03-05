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
      <div className="Navbar_2">
        <div className="Navbar_content">
          <h1 className="navbar_title">BROWNIE MAGIC</h1>
          <h4 className="navbar_content">
            5 tip how to make the best brownies in the game
          </h4>
          <div className="navbar_buttons">
            <div>
              <button className="Navbar_btns">How to</button>
              <button className="Navbar_btns">backing</button>
            </div>
            <p>12 min read</p>
          </div>
          <button className="Navbar_btn">READ NOW</button>
        </div>
        <div className="Navbar_image">
          <img className="Navbar_img" src="./Header-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
