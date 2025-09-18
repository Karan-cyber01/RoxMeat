import React from "react";
import Navbar from "../customcomponents/navbar";
import Footer, { Subscribe } from "../customcomponents/footer";
import founderImg from "../assets/founder.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";

const About = () => {
  return (
    <div className="about_page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="about_hero">
        <div className="about_hero_content">
          <h1 className="about_hero_title">About Rox Meat</h1>
          <p className="about_hero_subtitle">
            Premium quality meats with over 25 years of expertise in butchery services
          </p>
        </div>
        <div className="about_hero_image">
          <img src={bg1} alt="Rox Meat Butchery" />
        </div>
      </div>

      {/* Company Story Section */}
      <div className="about_story">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="story_content">
                <h2 className="story_title">Our Story</h2>
                <p className="story_text">
                  Founded in 1998, Rox Meat has been serving premium quality meats to families and businesses 
                  across the region. What started as a small family butchery has grown into a trusted name 
                  synonymous with quality, freshness, and exceptional service.
                </p>
                <p className="story_text">
                  Our commitment to excellence means we source only the finest cuts from local farms that 
                  share our values of ethical farming and animal welfare. Every piece of meat that leaves 
                  our store meets our rigorous standards for quality and freshness.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="story_image">
                <img src={bg2} alt="Our Butchery" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="about_founder">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="founder_image">
                <img src={founderImg} alt="Founder" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="founder_content">
                <h2 className="founder_title">Meet Our Founder</h2>
                <h3 className="founder_name">James Rodriguez</h3>
                <p className="founder_text">
                  "Quality is not just a word for us - it's our promise. Every cut, every preparation, 
                  every interaction with our customers reflects our dedication to excellence. We believe 
                  that great meals start with great ingredients, and that's exactly what we provide."
                </p>
                <p className="founder_text">
                  With over 25 years in the meat industry, James has built Rox Meat on the principles 
                  of quality, integrity, and customer satisfaction. His passion for butchery and 
                  commitment to excellence continues to drive our business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about_values">
        <div className="container">
          <h2 className="values_title">Our Values</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="value_card">
                <div className="value_icon">🥩</div>
                <h3 className="value_name">Premium Quality</h3>
                <p className="value_description">
                  We source only the finest cuts from trusted farms, ensuring every product 
                  meets our high standards for quality and freshness.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value_card">
                <div className="value_icon">🏪</div>
                <h3 className="value_name">Expert Service</h3>
                <p className="value_description">
                  Our skilled butchers provide personalized service, custom cuts, and expert 
                  advice to help you get exactly what you need.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value_card">
                <div className="value_icon">🌿</div>
                <h3 className="value_name">Ethical Sourcing</h3>
                <p className="value_description">
                  We partner with farms that practice ethical farming methods and prioritize 
                  animal welfare in all their operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="about_services">
        <div className="container">
          <h2 className="services_title">Our Services</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="service_item">
                <h4 className="service_name">Bespoke Butchery</h4>
                <p className="service_description">
                  Custom cuts tailored to your specific requirements, weight, and trim preferences.
                </p>
              </div>
              <div className="service_item">
                <h4 className="service_name">Bulk Orders</h4>
                <p className="service_description">
                  Special pricing and preparation services for restaurants, catering, and events.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service_item">
                <h4 className="service_name">Specialty Preparations</h4>
                <p className="service_description">
                  Marinades, seasonings, and special preparations to enhance your dining experience.
                </p>
              </div>
              <div className="service_item">
                <h4 className="service_name">Expert Consultation</h4>
                <p className="service_description">
                  Cooking tips, preparation advice, and recommendations from our experienced team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="about_contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="contact_title">Visit Our Store</h2>
              <div className="contact_info">
                <div className="contact_item">
                  <h4>Address</h4>
                  <p>123 Butcher Street, Meat District<br />Sydney, NSW 2000, Australia</p>
                </div>
                <div className="contact_item">
                  <h4>Hours</h4>
                  <p>Monday - Friday: 7:00 AM - 6:00 PM<br />
                     Saturday: 7:00 AM - 5:00 PM<br />
                     Sunday: 8:00 AM - 4:00 PM</p>
                </div>
                <div className="contact_item">
                  <h4>Contact</h4>
                  <p>Phone: (02) 1234 5678<br />
                     Email: info@roxmeat.com.au</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_cta">
                <h3>Ready to Experience Premium Quality?</h3>
                <p>Visit our store today or browse our online selection.</p>
                <button className="contact_btn" onClick={() => window.location.href = '/shop'}>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <Subscribe />
      
      <Footer />
    </div>
  );
};

export default About;
