import React, { useState } from "react";
import "./Foods.css";
import dinner from "../../../../datas";
import { Link, useParams } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import Mini from "./MiniFood/Mini";
const Foods = () => {
  const [dinners, setDinners] = useState(dinner);
  const [isShow, setIsShow] = useState(false);
  const [setDinner , setSetDinner] = useState()
  const setShowHandler = (food) => {
    let Dinner = food
    setIsShow(true);
    setSetDinner(Dinner)
    console.log(food)
  };
  const closeHandler = () => {
    setIsShow(false);
  };
  return (
    <div className="All">
      <h1 className="Food_menu_title">What you want to cook today!</h1>
      <div className="Food">
        {dinners.map((dinner) => (
          <div className="Food_menu" key={dinner.title}>
            <img
              className="Food_menu_image"
              src={dinner.image}
              alt={dinner.title}
            />
            <div className="Food_menu_content">
              <h2>{dinner.title}</h2>
              <div className="Food_menu_info">
                <Link to={`/Foods/${dinner.title}`}>
                  <button className="Food_info_btn">Let's Cook</button>
                </Link>
                <span className="span">in {dinner.time}</span>
              </div>
              <div className="Food_menu_author">
                <div>
                  <span>{dinner.author}</span>
                  <br />
                  <span>{dinner.date}</span>
                </div>
                <div style={{ marginLeft: "50px" }}>
                  <button
                    onClick={(food) => setShowHandler(dinner.title)}
                    value={dinner.title}
                    name={dinner.title}
                    className="Food_menu_btn"
                  >
                    <BiShow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isShow && <Mini onhide={closeHandler} foods={setDinner} />}
      </div>
    </div>
  );
};

export default Foods;
