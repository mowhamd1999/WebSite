import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Food.css";
import dinner from "../../../../datas";
import { FaStar } from "react-icons/fa6";
const Foods = () => {
  const params = useParams();
  const [dinners, setDinner] = useState(dinner);
  const food = dinners.find((item) => item.title == params.title);
  var image = food.image;
  var headerImage = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + image + ")",
  };
  console.log(headerImage);
  const rate = (food) => {
    if (food.rate == 1) {
      return 1;
    } else if (food.rate === 2) {
      return 2;
    } else if (food.rate === 3) {
      return 3;
    } else if (food.rate === 4) {
      return 4;
    } else if (food.rate === 5) {
      return 5;
    }
    return rate;
  };
  return (
    <div className="food_body">
      <div className="food_head" style={headerImage}>
        <div></div>
        <div className="food_title">
          <h1 className="food_title_title">{food.title}</h1>
          <h4 className="food_title_author">By {food.author}</h4>
          {rate(food) === 1 && <FaStar />}
          {rate(food) === 2 && (
            <span className="rate">
              <FaStar /> <FaStar />
            </span>
          )}
          {rate(food) === 3 && (
            <span className="rate">
              <FaStar /> <FaStar /> <FaStar />
            </span>
          )}
          {rate(food) === 4 && (
            <span className="rate">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
          )}
          {rate(food) === 5 && (
            <span className="rate">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
          )}
        </div>
      </div>
      <div className="food_main">
        <div className="food_main_note">{food.note}</div>
      </div>
    </div>
  );
};

export default Foods;
