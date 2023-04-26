import React, { useState } from "react";
import "./Category.css";
import Logo from "../resources/Super app.png";
import Cards from "./cards/Cards";
import action from "../resources/category-images/action.png";
import drama from "../resources/category-images/drama.png";
import romance from "../resources/category-images/romance.png";
import thriller from "../resources/category-images/thriller.png";
import western from "../resources/category-images/western.png";
import horror from "../resources/category-images/horror.png";
import fantasy from "../resources/category-images/fantasy.png";
import music from "../resources/category-images/music.png";
import fiction from "../resources/category-images/fiction.png";
function Category() {

    const arr = [];

    arr.push('thrillr');
  return (
    <div className="main">
      <div className="leftpanel">
        <div className="logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="bigtext">Choose your entertainment category</div>
        <div className="selected-options">

        </div>
      </div>
      <div className="rightpanel">
        <div className="category-grid">
          <div className="grid1">
            <Cards title="Drama" image={drama} />
          </div>
          <div className="grid2">
            <Cards title="Romace" image={romance} />
          </div>
          <div className="grid3">
            <Cards title="Thriller" image={thriller} />
          </div>
          <div className="grid4">
            <Cards title="Western" image={western} />
          </div>
          <div className="grid5">
            <Cards title="Horror" image={horror} />
          </div>
          <div className="grid6">
            <Cards title="Fantasy" image={fantasy} />
          </div>
          <div className="grid7">
            <Cards title="Music" image={music} />
          </div>
          <div className="grid8">
            <Cards title="Fiction" image={fiction} />
          </div>
          <div className="grid9">
            <Cards title="Action" image={action} />
          </div>
        </div>
        <div className="next-page-footer">
            <button className="nextpageBtn">Next Page</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
