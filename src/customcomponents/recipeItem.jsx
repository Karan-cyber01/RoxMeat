import React, { useState ,useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppStoreContext } from "../context/createcontext";

const RecipeItem = ({ heading , data }) => {

const { recipe, changerecipe } = useContext(AppStoreContext);
  let history = useHistory();
  return (
    <div className="feed_body">
      <div className="row">
        <h4 className="heading">{heading}</h4>
      </div>
      <div className="row m-0 p-0">
        {data?.map((data) => {
          return (
            
            <div
              className="col-md-4 feed_items "
              onClick={() => {
                changerecipe(data)
                console.log("recipeitem" , data)
                history.push("./recipeDetail/"+data.id);
          
              }}

            >
              <div>
                <img className="feed_img" src={data.imgName} alt="" />
              </div>
              <div className="desc">
                <b>{data?.desc}</b>
              </div>
            </div>
          );
        })}
      </div>

      <div className="btn_center_web">
        <button className="btn_view">View All</button>
      </div>
      <button className="btn_center_mob">View All</button>
    </div>
  );
};

export default RecipeItem;
