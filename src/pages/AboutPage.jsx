import React from "react";
import { FaCheck, FaAward, FaUsers, FaHandshake } from "react-icons/fa";
import bg1 from "../assets/bg1.png";
import founder from "../assets/founder.png";

const AboutPage = () => {
  return (
    <div className="about_page">
      {/* Hero Section */}
      <section className="about_hero">
        <div 
          className="about_hero_bg"
          style={{ backgroundImage: `url(${bg1})` }}
        ></div>
        <div className="about_hero_content">
          <div className="container">
            <h1 className="about_hero_title">About Roxmeat</h1>
            <p className="about_hero_subtitle">
              Your trusted partner for premium quality meats and exceptional butchery services
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about_story">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="story_content">
                <h2 className="story_title">Our Story</h2>
                <p className="story_text">
                  Founded with a passion for quality and excellence, Roxmeat has been serving 
                  customers with the finest cuts of meat for over a decade. What started as a 
                  small family business has grown into a trusted name in the meat industry.
                </p>
                <p className="story_text">
                  We believe that great meals start with great ingredients. That's why we work 
                  directly with local farms and suppliers to ensure every cut meets our high 
                  standards of quality, freshness, and taste.
                </p>
                <div className="story_stats">
                  <div className="stat_item">
                    <FaUsers className="stat_icon" />
                    <div className="stat_content">
                      <h3>10,000+</h3>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                  <div className="stat_item">
                    <FaAward className="stat_icon" />
                    <div className="stat_content">
                      <h3>10+</h3>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story_image">
                <img src={founder} alt="Roxmeat Founder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about_values">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">Our Values</h2>
            <p className="section_subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="value_card">
                <div className="value_icon">
                  <FaCheck />
                </div>
                <h3 className="value_title">Quality First</h3>
                <p className="value_description">
                  We never compromise on quality. Every cut is carefully selected and 
                  inspected to ensure it meets our exacting standards.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value_card">
                <div className="value_icon">
                  <FaHandshake />
                </div>
                <h3 className="value_title">Customer Service</h3>
                <p className="value_description">
                  Our customers are at the heart of everything we do. We're committed 
                  to providing exceptional service and support.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value_card">
                <div className="value_icon">
                  <FaAward />
                </div>
                <h3 className="value_title">Excellence</h3>
                <p className="value_description">
                  We strive for excellence in every aspect of our business, from 
                  sourcing to delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about_services">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">What We Offer</h2>
            <p className="section_subtitle">
              Comprehensive meat solutions for all your needs
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service_list">
                <div className="service_item">
                  <FaCheck className="service_icon" />
                  <div className="service_content">
                    <h4>Bespoke Butchery Service</h4>
                    <p>Custom cuts tailored to your specific requirements, weight, and trim preferences.</p>
                  </div>
                </div>
                <div className="service_item">
                  <FaCheck className="service_icon" />
                  <div className="service_content">
                    <h4>Premium Quality Meats</h4>
                    <p>Carefully sourced from the finest farms and suppliers for guaranteed quality.</p>
                  </div>
                </div>
                <div className="service_item">
                  <FaCheck className="service_icon" />
                  <div className="service_content">
                    <h4>Expert Consultation</h4>
                    <p>Professional advice on cuts, preparation methods, and cooking techniques.</p>
                  </div>
                </div>
                <div className="service_item">
                  <FaCheck className="service_icon" />
                  <div className="service_content">
                    <h4>Fast Delivery</h4>
                    <p>Quick and reliable delivery service to get fresh meat to your door.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_benefits">
                <h3>Why Choose Roxmeat?</h3>
                <ul className="benefits_list">
                  <li>✓ Over 10 years of industry experience</li>
                  <li>✓ Direct relationships with trusted suppliers</li>
                  <li>✓ Rigorous quality control processes</li>
                  <li>✓ Competitive pricing on all products</li>
                  <li>✓ Personalized customer service</li>
                  <li>✓ Flexible ordering and delivery options</li>
                </ul>
                <div className="cta_section">
                  <h4>Ready to experience the difference?</h4>
                  <a href="/shop" className="cta_button">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="about_contact_cta">
        <div className="container">
          <div className="cta_content">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our products or services? We'd love to hear from you.
            </p>
            <div className="cta_buttons">
              <a href="/contact" className="btn btn_primary">Contact Us</a>
              <a href="/shop" className="btn btn_secondary">Browse Products</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
