import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main">
      <div className="Main_first">
        <div className="Main_first_1">
          <h2>Gift guide for foodies</h2>
          <img className="Main_first_img" src="Header-image.png" alt="" />
          <div className="First_btn">
            <button>Products</button>
            <span>5 min read</span>
          </div>
          <div>
            <span>Peter Pan</span>
            <span>Peter Pan</span>
          </div>
        </div>
        <div className="Main_first_2">
          <div className="First_1">
            <img className="Main_first_2_img" src="Header-image.png" alt="" />
            <div className="First_1_title">
              <h4>creamy spoghetti</h4>
              <div className="First_1_btn">
                <button>Products</button>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
