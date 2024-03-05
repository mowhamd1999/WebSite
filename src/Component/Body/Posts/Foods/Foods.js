import React, { useState } from "react";
import "./Foods.css";
import dinner from "../../../../datas";
import { Link } from "react-router-dom";
const Foods = () => {
  const [dinners, setDinners] = useState(dinner);
  return (
    <div className="All">
      <h1 className="Food_menu_title">What you want to cook today!</h1>
      <div className="Food">
        {dinners.map((dinner) => (
          <Link to={`/Foods/${dinner.title}`}>
            <div className="First_1">
              <img
                className="Main_first_2_img"
                src={dinner.image}
                alt={dinner.title}
              />
              <div className="First_1_title">
                <h2>{dinner.title}</h2>
                <div className="First_1_btn">
                  <button className="btn">Let's Cook</button>
                  <span>{dinner.time}</span>
                </div>
                <div className="Main_author_2">
                  <img className="athor_img" src="Header-image.png" alt="" />
                  <div className="athor_title">
                    <span>{dinner.author}</span>
                    <br />
                    <span>March 20, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Foods;
