import React from "react";
import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";
import { FaArrowRight , FaStar } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="row m-0 p-0">
          <div className="col-md-3">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-3">
            <h6>About</h6>
            <p>
              We provide a bespoke butchery service saving your valuable time
              and resources.
            </p>
            <p className="grey">
              ©2020, Rox Meat Limited. <br /> <br />
              All rights reserved
            </p>
          </div>
          <div className="links col-md-3">
            <h6>Links</h6>
            <p>
              <FaArrowRight className="yellow" /> Search
            </p>
            <p>
              <FaArrowRight className="yellow" /> FAQs{" "}
            </p>
            <p>
              <FaArrowRight className="yellow" /> Privacy Policy
            </p>
            <p>
              <FaArrowRight className="yellow" /> Cookie Policy
            </p>
            <p>
              <FaArrowRight className="yellow" /> Terms and conditions
            </p>
            <p>
              <FaArrowRight className="yellow" /> Customer care
            </p>
            <p>
              <FaArrowRight className="yellow" /> Terms of Service
            </p>
            <p>
              <FaArrowRight className="yellow" /> Refund policy
            </p>
            <p>
              <FaArrowRight className="yellow" /> Our certificates
            </p>
          </div>
          <div className="col-md-3">
            <h6>Contacts</h6>
            <p>11 Passey Pl, London SE9 5DA</p>
            <p>Instagram</p>
            <p>info@roxmeat.com</p>
            <p>+44 (0) 20 8855 5757</p>
          </div>
        </div>
      </div>
      <div className="footer 2">
        <div className="row m-0 p-0">
          <div className="col-md-12">
            <span className="email">Shop@MeatBox Ltd </span>
            <br />
            <img className="right" src={footer} alt="" />
          </div>
        </div>
        <button className="btn_review">Review Us On <FaStar className="green" /> TrustPolit </button>
      </div>
    </div>
  );
};

export default Footer;

export const Subscribe = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreeTerms) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="subscribe_component">
      {isSubscribed ? (
        <div className="success_message_container">
          <div className="success_icon">🎉</div>
          <h3>Thank you for subscribing!</h3>
          <p>You'll receive our latest updates and offers soon.</p>
        </div>
      ) : (
        <div className="subscribe_layout">
          {/* Header Section */}
          <div className="subscribe_header">
            <h2 className="subscribe_title">Get the Latest News & Exclusive Offers</h2>
            <p className="subscribe_subtitle">
              Subscribe to our newsletter and be the first to know about new products, 
              special deals, cooking tips, and exclusive butcher insights.
            </p>
          </div>

          {/* Main Content */}
          <div className="subscribe_content">
            {/* Left Side - Form */}
            <div className="subscribe_form_section">
              <form onSubmit={handleSubscribe} className="newsletter_form">
                <div className="form_header">
                  <div className="form_icon">📧</div>
                  <h3>Join Our Newsletter</h3>
                </div>
                
                <div className="input_container">
                  <input 
                    className="email_input" 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    className="subscribe_btn" 
                    type="submit"
                    disabled={!email || !agreeTerms}
                  >
                    <span>Subscribe Now</span>
                    <svg className="btn_arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="terms_section">
                  <label className="terms_checkbox">
                    <input 
                      type="checkbox" 
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    <span className="terms_text">
                      I accept the <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms & Conditions</a>
                    </span>
                  </label>
                </div>
              </form>
            </div>

            {/* Right Side - Benefits */}
            <div className="benefits_section">
              <div className="benefits_header">
                <h4>What you'll get:</h4>
              </div>
              <div className="benefits_grid">
                <div className="benefit_card">
                  <div className="benefit_icon">🥩</div>
                  <div className="benefit_info">
                    <h5>Weekly Fresh Meat Specials</h5>
                    <p>Premium cuts at special prices</p>
                  </div>
                </div>
                <div className="benefit_card">
                  <div className="benefit_icon">📧</div>
                  <div className="benefit_info">
                    <h5>Exclusive Subscriber Discounts</h5>
                    <p>Member-only deals and offers</p>
                  </div>
                </div>
                <div className="benefit_card">
                  <div className="benefit_icon">🍽️</div>
                  <div className="benefit_info">
                    <h5>Expert Cooking Tips & Recipes</h5>
                    <p>Professional chef recommendations</p>
                  </div>
                </div>
                <div className="benefit_card">
                  <div className="benefit_icon">🎁</div>
                  <div className="benefit_info">
                    <h5>Early Access to New Products</h5>
                    <p>Be first to try our latest offerings</p>
                  </div>
                </div>
              </div>
              
              <div className="trust_indicators">
                <div className="trust_item">
                  <span className="trust_number">5,000+</span>
                  <span className="trust_label">Happy Subscribers</span>
                </div>
                <div className="trust_item">
                  <span className="trust_number">100%</span>
                  <span className="trust_label">Spam-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
