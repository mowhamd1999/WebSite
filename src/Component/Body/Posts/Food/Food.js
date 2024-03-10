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
        <div className="food_main_note">
          <div className="food_main_note_1">{food.note}</div>
        </div>
        <div className="food_ingredients">
          <div className="food_ingredients_title">
            <div style={{width:'100%'}}>
              <div className="food_ingredients_head">
                <div className="food_ingredients_dash"></div>
                <h2>INGREDIENTS</h2>
              </div>
              <div className="food_ingredients_info">
                <div className="food_ingredients_space"></div>
                <div className="food_ingredients_note">
                {food.ingredients.map((item , index)=> (
                  <div className="food_ingredients_div">
                    {index + 1}- {item}
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="food_preparation">
          <div className="food_preparation_title">
            <div>
              <div className="food_preparation_head">
                <h2>PREPARATION</h2>
                <div className="food_preparation_dash"></div>
              </div>
              <div className="food_preparation_info">
                <div className="food_preparation_step">
                  {food.step.map((item, index) => (
                    <div>
                      <h2 className="food_preparation_steps">
                        Step {index + 1}
                      </h2>
                      <div className="food_preparation_note">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="food_preparation_space">
                  <img
                    className="food_preparation_image"
                    src={food.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
