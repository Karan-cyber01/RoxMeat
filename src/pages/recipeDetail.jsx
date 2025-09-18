import React, { useContext } from "react";
import { AppStoreContext } from "../context/createcontext";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Footer, { Subscribe } from "../customcomponents/footer";

const RecipeDetail = () => {
  const { recipe, changerecipe } = useContext(AppStoreContext);
  const { data, changedata } = useContext(AppStoreContext);

  console.log("recipe", recipe);
  return (
    <div className="rd_body">
      <div className="row  rd_row">
        <div className="col-md-8">
          <div className="row">
            <img className="itemImg" src={recipe?.imgName} alt="" />
          </div>
          <div className="row">
            <span className="date_r_p">January 26, 2021</span>
          </div>
          <div className="recipe_rd">
            <h4>{recipe?.desc}</h4>
            <p>
              <b>Served with roast potatoes and gravy</b>
            </p>
            <span className="one">
              Prep: 45 min <br />
              Cook: 1 hour 30 minutes <br />
              Servings: 4 <br />
            </span>
            <p className="two">
              Ingredients: <br />
              1 whole chicken, about 1.6 kg <br />
              ½ lemon <br />
              8 fresh thyme springs (or 2 fresh rosemary springs) <br />
              4 bay leaves <br />
              2 onions, peeled and halved <br />
              5 garlic cloves <br />
              1 tbsp olive oil <br />
              For the roast potatoes <br />
              1 kg baby potatoes, scrubbed and halved <br />
              5 garlic cloves <br />
              Handful fresh thyme or oregano leaves <br />
              4 tbsp olive oil <br />
              For the gravy <br />½ chicken stock cube <br />
            </p>
            <span className="three">Steps to make it:</span>
            <div className="four">
              <span>
                1: Heat the oven to its highest settings <br />
                2: Season the chicken inside and out then stuff it with the
                lemon, half the herbs and half an onion <br />
                3: Roughly slice the remaining onions, spread the over the base
                of a roasting tin, then scatter over the garlic and the
                remaining herbs <br />
                4: Rub the chicken with the oil and season generously with salt
                and pepper <br />
                5: Pull the legs slightly away from the body, then sit the
                chicken, breast-side down, on top of the onions and put the tin
                in the oven. Immediately turn down the heat to 190˚C and cook
                for over an hour. The chicken is cooked when the juices from the
                thickest part of the thigh run clear when pierced with a skewer.{" "}
                <br />
                6: While the chicken is roasting, put the potatoes on a large
                baking tray with the garlic and herbs, pour over the the oil,
                season well and give everything a good toss. Roast in the oven
                with the chicken, stirring occasionally and adding a little oil
                if they look dry. They will be crisp and golden in about an
                hour. <br />
                7: For the most succulent meat, it is essential to rest the bird
                in a warm place, covered in foil, for 15 minutes while you make
                the gravy. For the gravy, skim off most of the fat from the
                chicken tin and discard, leaving only a few table spoon behind.
                Put the tin over the hob over a medium heat. Crumble in the
                stock cube, whisk in the flour and leave to bubble for a few
                minutes. Whisk in the wine a little at a time, letting it bubble
                for a minute between each addition, the boil for a few moments
                before adding enough boiling water to thin gravy to the desired
                consistency. Simmer for 5-10 minutes, then taste and season with
                salt and pepper <br />
                8: Pick out and discard the herbs. Pour the gravy through a
                sieve into a warm jug. Put the chicken on a large platter
                surrounded with the potatoes, onions and garlic. <br />
                9: Enjoy
              </span>
            </div>
          </div>
          <div className="row">
            <h5 className="share">SHARE</h5>
            <div className="inline_block">
              <MdFacebook className="padding" />{" "}
              <FaInstagram className="padding" />{" "}
              <FaTwitter className="padding" />
            </div>
            <hr />
          </div>
        </div>

        <div className="col-md-4">
          <h6>Recent Articles</h6>

          {data?.map((x) => {
            return (
              <div>
                <hr className="hr" />
                <span className="title_r">{x?.desc}</span> <br />
                <span className="date_r"> January {x?.id}, 2021</span>
              </div>
            );
          })}
        </div>
      </div>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default RecipeDetail;
