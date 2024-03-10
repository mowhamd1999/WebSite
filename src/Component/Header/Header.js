import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
const searchHandler = () => {
  window.prompt("search");
};
const Header = () => {
  const params = useLocation();
  return (
    <div className={params.pathname === "/" ? "Header" : "setHeader"}>
      <div className="Navbar">
        <div
          className={
            params.pathname === "/" ? "Navbar_title" : "setNavbar_title"
          }
        >
          <h2>MyFood</h2>
        </div>
        <div
          className={params.pathname === "/" ? "Navbar_link" : "setNavbar_link"}
        >
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="./Foods">
              <li>Dinner</li>
            </Link>
            <Link to="./Recipes">
              <li>Recipes</li>
            </Link>
            <Link to='./Contact'>
              <li>Contact</li>
            </Link>
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
