import React, {useContext} from "react";
import founder from "../assets/founder.png";
import Items from "./items";
import background from "../assets/bg1.png";
import recipe from "../assets/bg2.png";
import { Slider2 } from "./slider";
import { AppStoreContext } from "../context/createcontext";
import { Subscribe } from "./footer";

const Feed = () => {
  const { data, changedata } = useContext(AppStoreContext);
  return (
    <div>
      <Items heading={"Best Sellers"} data={data} />

      <div className="founder row m-0 p-0">
        <div className="col-md-6 m-0 p-0">
          <img className="f_img" src={founder} alt="" />
        </div>
        <div className="col-md-6">
          <div className="founder_desc ">
            <h2>Meet the founder</h2>
            <p>
              Tansu, a chef by trade and food lover by nature, find out how and
              where our founder developed his inspiration for fresh produce
              resulting in Rox Meat.
            </p>
            <div className="btn_center_web"><button className="btn_read">Read More</button></div>
            <button className="btn_row_center_mob">Read More</button>
          </div>
        </div>
      </div>

      <Items heading={"Offer and New Arrivals"} data={data} />

      <div className="background">
        <div
          className="background_web"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h3>Meat Boxes</h3>
          <p>
            Make the upcoming barbecue season a memorable one with our selection
            of family favourites pork, chicken and lamb, both you and your
            guests will be spoilt for choice.
          </p>
          <p>
            Are you an expert barbecuer? Contact us directly to outline your
            requirements and we will build a bespoke box of the finest meats
            perfect for whatever occasion you're catering for.
          </p>
          <button className="btn_view">Meat Boxes</button>
        </div>
        <div
          className="background_mob"
          style={{
            backgroundImage: `url(${recipe})`,
          }}
        >
          <h3>Meat Boxes</h3>
          <p>
            Make the upcoming barbecue season a memorable one with our selection
            of family favourites pork, chicken and lamb, both you and your
            guests will be spoilt for choice.
          </p>
          <p>
            Are you an expert barbecuer? Contact us directly to outline your
            requirements and we will build a bespoke box of the finest meats
            perfect for whatever occasion you're catering for.
          </p>
          <button className="btn_center_mob">Meat Boxes</button>
        </div>
      </div>

      <Items heading={"Chicken Offer"} data={data} />

      {/* Subscribe Section */}
      <div className="container my-5">
        <Subscribe />
      </div>

      <Slider2 />
    </div>
  );
};

export default Feed;