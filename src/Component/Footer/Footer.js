import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_link">
        <div className="Footer_title">
          <h2>My Food</h2>
        </div>
        <div className="Footer_content">
          <h5 style={{ fontSize: "1.3rem", color: "#647504" }}>
            Tasty destination for foodies
          </h5>
          <div>
            <ul className="Links">
              <Link to="/" className="Link">
                <li>Home</li>
              </Link>
              <Link to="./Foods" className="Link">
                <li>Dinner</li>
              </Link>
              <Link to="./Recipes" className="Link">
                <li>Recipes</li>
              </Link>
              <Link className="Link">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer_contact">
        <h4>Join our newsletter for the tastiest treats</h4>
        <div className="email">
          <input type="email" placeholder="Your email address" />
          <button className="Footer_btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
