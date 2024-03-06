import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Mini.css";
import { Link } from "react-router-dom";
import dinner from "../../../../../datas";
const Mini = ({ onhide, foods }) => {
  const init = useState(dinner);
  const food = init[0].find((item) => item.title == foods);
  return (
    <div className="modal-parent active">
      <div className="details-modal">
        <MdClose className="closetab" onClick={onhide} />
        <div className="detail_container">
          <div>
            <img className="detail_img" src={food.image} alt="" />
          </div>
          <div className="detail_body">
            <h3 className="detail_title">{food.title}</h3>
            <p className="detail_note">{food.note}</p>
            <div className="detail_detail">
              <div className="detail_ingrediants">
                <h3 style={{ textAlign: "left", fontSize: "1.7rem" }}>
                  Ingredients need{" "}
                </h3>
                <ul className="detail_ul">
                  {food.ingredients.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail_step">
                <h3 style={{ textAlign: "left", fontSize: "1.7rem" }}>
                  Step need{" "}
                </h3>
                <ul className="detail_ul">
                  {food.step.map((item, index) => (
                    <li>
                      {index + 1} Step {item}
                    </li>
                  ))}
                </ul>
                <Link to={`/Foods/${food.title}`}>
                  <button className="detail_btn">Lets' Cook</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mini;
