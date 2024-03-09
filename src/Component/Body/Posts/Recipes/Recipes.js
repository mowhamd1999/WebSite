import React, { useState } from "react";
import "./Recipes.css";
import dinner from "../../../../datas";
import { Link } from "react-router-dom";
const Recipes = () => {
  const [dinners, setDinners] = useState(dinner);
  return (
    <div className="Recipes_container">
      <h1 className="Recipes_title">PASTA</h1>
      <div className="Recipes_Body">
        <div className="Body_header">
          <h4>Filter articles</h4>
          <span>8 items</span>
        </div>
        <div className="Body_filters">
          <select className="Body_filter_category" name="category" id="1">
            <option value="category">Category</option>
            <option value="dinner">Dinner</option>
            <option value="breakfast">BreakFast</option>
            <option value="cocktails">CockTails</option>
          </select>
          <select className="Body_filter_country" name="country" id="2">
            <option value="category">Italian</option>
            <option value="dinner">English</option>
            <option value="breakfast">Iran</option>
          </select>
        </div>
        <div className="Body_posts">
          {dinners.map((item) => (
            <div className="Body_post">
              <h3 className="post_title">{item.title}</h3>
              <img className="post_image" src={item.image} alt={item.title} />
              <br />
              <span className="post_note">{item.note.substring(0, 30)}...</span>
              <br />
              <Link to={`/Foods/${item.title}`}>
                <button className="post_btn">READ</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
