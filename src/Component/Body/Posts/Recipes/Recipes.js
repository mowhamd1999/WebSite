import React, { useState } from "react";
import "./Recipes.css";
import dinner from "../../../../datas";
import { Link } from "react-router-dom";
const Recipes = () => {
  const [dinners, setDinners] = useState(dinner);
  const [category, setCategory] = useState(dinners);

  const categoryHandler = (event) => {
    let query = event.target.value;
    setCategory(dinners.filter((item) => item.category == query));
    if (query == "category") {
      setCategory(dinners);
      return;
    }
  };
  const countryHandler = (e) => {
    let Country = e.target.value;
    setCategory(category.filter((item) => item.country == Country));
    if (Country == "country") {
      setCategory(category);
      return;
    }
  };
  return (
    <div className="Recipes_container">
      <h1 className="Recipes_title">PASTA</h1>
      <div className="Recipes_Body">
        <div className="Body_header">
          <h4>Filter articles</h4>
          <span>{category.length} items</span>

        </div>
        <div className="Body_filters">
          <select
            className="Body_filter_category"
            onChange={categoryHandler}
            name="category"
            id="1"
          >
            <option value="category">Category</option>
            <option value="dinner">Dinner</option>
            <option value="breakfast">BreakFast</option>
            <option value="cocktails">CockTails</option>
          </select>
          <select
            className="Body_filter_country"
            onChange={countryHandler}
            name="country"
            id="2"
          >
            <option value="country">Country</option>
            <option value="italian">Italian</option>
            <option value="english">English</option>
            <option value="iran">Iran</option>
          </select>
        </div>
        <div className="Body_posts">
          {category.map((item) => (
            <div className="Body_post">
              <div className="Post_title">
                <h3 className="post_title">{item.title}</h3>
                <div className="post_notification">
                  <p className="post_category">{item.category}</p>
                  <p className="post_country">{item.country}</p>
                </div>
              </div>
              <img className="post_image" src={item.image} alt={item.title} />
              <br />
              <span className="post_note">{item.note.substring(0, 30)}...</span>
              <br />
              <Link to={`/Foods/${item.title}`}>
                <button className="post_btn">READ</button>
              </Link>
            </div>
          ))}
          {/* ///////////////////////////////////// */}
          {/* {dinners.map((item) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
