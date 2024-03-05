import React from "react";
import "./Main.css";
import { LuEggFried } from "react-icons/lu";
import { LiaBreadSliceSolid } from "react-icons/lia";
import { FaMartiniGlass } from "react-icons/fa6";
import { PiHamburger } from "react-icons/pi";
import { LuSoup } from "react-icons/lu";
import { PiWine } from "react-icons/pi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
const Main = () => {
  return (
    <div className="Main">
      <div className="Main_first">
        <div className="Main_first_1">
          <h2 className="title">Gift guide for foodies</h2>
          <img className="Main_first_img" src="Header-image.png" alt="" />
          <div className="First_btn">
            <button className="btn">Products</button>
            <span>5 min read</span>
          </div>
          <div className="Main_author">
            <img className="athor_img" src="Header-image.png" alt="" />
            <div className="athor_title">
              <span>Peter Pan</span>
              <br />
              <span>March 20, 2022</span>
            </div>
          </div>
        </div>
        <div className="Main_first_2">
          <div className="First_1">
            <img className="Main_first_2_img" src="Header-image.png" alt="" />
            <div className="First_1_title">
              <h2>creamy spoghetti</h2>
              <div className="First_1_btn">
                <button className="btn">Products</button>
                <span>5 min read</span>
              </div>
              <div className="Main_author_2">
                <img className="athor_img" src="Header-image.png" alt="" />
                <div className="athor_title">
                  <span>Peter Pan</span>
                  <br />
                  <span>March 20, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="First_1">
            <img className="Main_first_2_img" src="Header-image.png" alt="" />
            <div className="First_1_title">
              <h2>creamy spoghetti</h2>
              <div className="First_1_btn">
                <button className="btn">Products</button>
                <span>5 min read</span>
              </div>
              <div className="Main_author_2">
                <img className="athor_img" src="Header-image.png" alt="" />
                <div className="athor_title">
                  <span>Peter Pan</span>
                  <br />
                  <span>March 20, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="First_1">
            <img className="Main_first_2_img" src="Header-image.png" alt="" />
            <div className="First_1_title">
              <h2>creamy spoghetti</h2>
              <div className="First_1_btn">
                <button className="btn">Products</button>
                <span>5 min read</span>
              </div>
              <div className="Main_author_2">
                <img className="athor_img" src="Header-image.png" alt="" />
                <div className="athor_title">
                  <span>Peter Pan</span>
                  <br />
                  <span>March 20, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Secound_first">
        <div className="Secound_title">
          <div className="Secound_header">
            <h6>IN MY</h6>
            <h1>KITCHEN</h1>
          </div>
          <div className="Secound_dash"></div>
        </div>
        <div className="Secound_first_content">
          <div className="Secound_first_link">
            <LuEggFried className="Secound_icon" />
            <span className="Secound_span">Breakfast</span>
          </div>
          <div className="Secound_first_link">
            <LiaBreadSliceSolid className="Secound_icon" />
            <span className="Secound_span">Baking</span>
          </div>
          <div className="Secound_first_link">
            <FaMartiniGlass className="Secound_icon" />
            <span className="Secound_span">Cocktails</span>
          </div>
          <div className="Secound_first_link">
            <PiHamburger className="Secound_icon" />
            <span className="Secound_span">Dinners</span>
          </div>
          <div className="Secound_first_link">
            <LuSoup className="Secound_icon" />
            <span className="Secound_span">Pasta</span>
          </div>
          <div className="Secound_first_link">
            <PiWine className="Secound_icon" />
            <span className="Secound_span">Wines</span>
          </div>
          <div className="Secound_first_link">
            <MdOutlineTipsAndUpdates className="Secound_icon" />
            <span className="Secound_span">Tips</span>
          </div>
        </div>
      </div>
      <div className="Secound_first_2">
        <div className="Secound_title">
          <div className="Secound_dash"></div>
          <div className="Secound_header_2">
            <h6 style={{ textAlign: "left" }}>IN</h6>
            <h1>SEASON</h1>
          </div>
        </div>
        <div className="Secound_secound_content">
          <div className="Secound_secound_link">
            <img
              className="Secound_secound_img"
              src="Header-image.png"
              alt=""
            />
            <div className="Secound_content">
              <h3 style={{paddingBottom:'10px'}}>Spring Quiche with vegetables</h3>
              <span style={{color:'gray'}}>Gluten free with potato crust!</span>
            </div>
          </div>
          <div className="Secound_secound_link">
            <img
              className="Secound_secound_img"
              src="Header-image.png"
              alt=""
            />
            <div className="Secound_content">
              <h3 style={{paddingBottom:'10px'}}>Spring Quiche with vegetables</h3>
              <span style={{color:'gray'}}>Gluten free with potato crust!</span>
            </div>
          </div>
          <div className="Secound_secound_link">
            <img
              className="Secound_secound_img"
              src="Header-image.png"
              alt=""
            />
            <div className="Secound_content">
              <h3 style={{paddingBottom:'10px'}}>Spring Quiche with vegetables</h3>
              <span style={{color:'gray'}}>Gluten free with potato crust!</span>
            </div>
          </div>
          <div className="Secound_secound_link">
            <img
              className="Secound_secound_img"
              src="Header-image.png"
              alt=""
            />
            <div className="Secound_content">
              <h3 style={{paddingBottom:'10px'}}>Spring Quiche with vegetables</h3>
              <span style={{color:'gray'}}>Gluten free with potato crust!</span>
            </div>
          </div>
          <div className="Secound_secound_link">
            <img
              className="Secound_secound_img"
              src="Header-image.png"
              alt=""
            />
            <div className="Secound_content">
              <h3 style={{paddingBottom:'10px'}}>Spring Quiche with vegetables</h3>
              <span style={{color:'gray'}}>Gluten free with potato crust!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
