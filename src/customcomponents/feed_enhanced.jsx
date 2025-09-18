import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import founder from "../assets/founder.png";
import Items from "./items";
import { LoadingSkeleton } from "./Loading";
import background from "../assets/bg1.png";
import recipe from "../assets/bg2.png";
import { Slider2 } from "./slider";
import { AppStoreContext } from "../context/createcontext";
import { Subscribe } from "./footer";
import { FaQuoteLeft, FaPlay, FaArrowRight } from "react-icons/fa";

const Feed = () => {
  const { data, changedata } = useContext(AppStoreContext);
  const [isLoading, setIsLoading] = useState(false);
  const [animatedSections, setAnimatedSections] = useState({});
  const history = useHistory();

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleReadMore = () => {
    history.push('/about');
  };

  const handleShopNow = () => {
    history.push('/shop');
  };

  if (isLoading) {
    return (
      <div className="feed_container">
        <LoadingSkeleton count={6} />
      </div>
    );
  }

  return (
    <div className="feed_container">
      {/* Best Sellers Section */}
      <section 
        id="bestsellers" 
        data-animate
        className={`section ${animatedSections.bestsellers ? 'animated' : ''}`}
      >
        <Items heading={"Best Sellers"} data={data} />
      </section>

      {/* Enhanced Founder Section */}
      <section 
        id="founder" 
        data-animate
        className={`founder_section ${animatedSections.founder ? 'animated' : ''}`}
      >
        <div className="founder_container">
          <div className="founder_image_container">
            <img className="founder_image" src={founder} alt="Tansu - Founder" />
            <div className="founder_overlay">
              <button className="play_btn" aria-label="Play founder story video">
                <FaPlay />
              </button>
            </div>
          </div>
          
          <div className="founder_content">
            <div className="founder_text">
              <div className="quote_icon">
                <FaQuoteLeft />
              </div>
              <h2 className="founder_title">Meet the Founder</h2>
              <div className="title_underline"></div>
              <p className="founder_description">
                Tansu, a chef by trade and food lover by nature, find out how and
                where our founder developed his inspiration for fresh produce
                resulting in Rox Meat.
              </p>
              <div className="founder_stats">
                <div className="stat_item">
                  <span className="stat_number">15+</span>
                  <span className="stat_label">Years Experience</span>
                </div>
                <div className="stat_item">
                  <span className="stat_number">1000+</span>
                  <span className="stat_label">Happy Customers</span>
                </div>
                <div className="stat_item">
                  <span className="stat_number">100%</span>
                  <span className="stat_label">Fresh Quality</span>
                </div>
              </div>
              <button 
                className="founder_cta"
                onClick={handleReadMore}
              >
                <span>Read More</span>
                <FaArrowRight className="cta_arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section 
        id="newarrivals" 
        data-animate
        className={`section ${animatedSections.newarrivals ? 'animated' : ''}`}
      >
        <Items heading={"Offers & New Arrivals"} data={data} />
      </section>

      {/* Enhanced Meat Boxes Section */}
      <section 
        id="meatboxes" 
        data-animate
        className={`meat_boxes_section ${animatedSections.meatboxes ? 'animated' : ''}`}
      >
        <div className="meat_boxes_container">
          <div className="meat_boxes_content">
            <div className="content_wrapper">
              <h3 className="meat_boxes_title">Premium Meat Boxes</h3>
              <div className="title_accent"></div>
              <p className="meat_boxes_description">
                Make the upcoming barbecue season a memorable one with our selection
                of family favourites pork, chicken and lamb. Both you and your
                guests will be spoilt for choice.
              </p>
              <p className="meat_boxes_subdescription">
                Are you an expert barbecuer? Contact us directly to outline your
                specific requirements and we'll create a bespoke meat box just for you.
              </p>
              <div className="meat_boxes_features">
                <div className="feature_item">
                  <div className="feature_icon">🥩</div>
                  <span>Premium Cuts</span>
                </div>
                <div className="feature_item">
                  <div className="feature_icon">📦</div>
                  <span>Custom Boxes</span>
                </div>
                <div className="feature_item">
                  <div className="feature_icon">🚚</div>
                  <span>Fresh Delivery</span>
                </div>
              </div>
              <button 
                className="meat_boxes_cta"
                onClick={handleShopNow}
              >
                <span>Shop Meat Boxes</span>
                <FaArrowRight className="cta_arrow" />
              </button>
            </div>
          </div>
          <div 
            className="meat_boxes_background"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
        </div>
      </section>

      {/* Recipe Section */}
      <section 
        id="recipe" 
        data-animate
        className={`recipe_section ${animatedSections.recipe ? 'animated' : ''}`}
      >
        <div className="recipe_container">
          <div className="recipe_image_container">
            <img className="recipe_image" src={recipe} alt="Recipe inspiration" />
          </div>
          <div className="recipe_content">
            <div className="recipe_text">
              <h3 className="recipe_title">Recipe Inspiration</h3>
              <div className="title_underline"></div>
              <p className="recipe_description">
                Discover delicious recipes and cooking inspiration to make the most
                of your premium meat selection. From quick weeknight dinners to
                impressive weekend feasts.
              </p>
              <button 
                className="recipe_cta"
                onClick={() => history.push('/recipe')}
              >
                <span>View Recipes</span>
                <FaArrowRight className="cta_arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram_section">
        <Slider2 />
      </section>

      {/* Newsletter Section */}
      <section className="newsletter_section">
        <Subscribe />
      </section>
    </div>
  );
};

export default Feed;
