import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  // Memoize slides to prevent unnecessary re-renders
  const slides = useMemo(() => [
    {
      id: 1,
      image: one,
      title: "Premium Butchery Service",
      subtitle: "Bespoke cuts tailored to your needs",
      description: "Rox Meat offers a bespoke butchery service with meat cut to your specific requirements, weight, and trim, saving you valuable time and resources.",
      cta: "Shop Now",
      theme: "light"
    },
    {
      id: 2,
      image: two,
      title: "Fresh Quality Meats",
      subtitle: "Sourced from the finest farms",
      description: "Experience the finest quality meats, carefully selected and expertly prepared for your dining pleasure.",
      cta: "Explore Products",
      theme: "dark"
    },
    {
      id: 3,
      image: three,
      title: "Expert Meat Cutting",
      subtitle: "Professional service you can trust",
      description: "Our skilled butchers provide expert cutting services to ensure you get exactly what you need for your culinary creations.",
      cta: "Learn More",
      theme: "light"
    }
  ], []);

  // Auto-play functionality with slow transitions
  useEffect(() => {
    if (isAutoPlaying && isLoaded) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = (prev + 1) % slides.length;
          return next;
        });
      }, 6000); // 6 seconds for each slide to allow for slow transitions
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isLoaded, slides.length]);

  // Preload images
  useEffect(() => {
    const imagePromises = slides.map(slide => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // Also resolve on error to continue
        img.src = slide.image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Pause auto-play temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Pause auto-play temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Pause auto-play temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleCTAClick = () => {
    history.push('/shop');
  };

  if (!isLoaded) {
    return (
      <div className="slider_loading">
        <div className="loading_spinner_large"></div>
      </div>
    );
  }

  return (
    <div className="modern_slider">
      {/* Main Slider */}
      <div className="slider_container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
            style={{ 
              opacity: index === currentSlide ? 1 : 0,
              position: index === currentSlide ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: index === currentSlide ? 2 : 1
            }}
          >
            <div className="slide_image_container">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="slide_image"
              />
              <div className="slide_overlay"></div>
            </div>
            
            <div className={`slide_content slide_content_${slide.theme}`}>
              <div className="slide_text">
                <span className="slide_subtitle">{slide.subtitle}</span>
                <h1 className="slide_title">{slide.title}</h1>
                <p className="slide_description">{slide.description}</p>
                <button 
                  className="slide_cta"
                  onClick={handleCTAClick}
                >
                  <span>{slide.cta}</span>
                  <div className="cta_arrow">→</div>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="slider_controls">
          <button 
            className="control_btn prev_btn"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            className="control_btn next_btn"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Auto-play toggle */}
        <button
          className="autoplay_toggle"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Slide Indicators */}
        <div className="slide_indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="indicator_progress">
                {index === currentSlide && isAutoPlaying && (
                  <div className="progress_bar"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile_hero">
        <div className="mobile_hero_content">
          <h2 className="mobile_title">Premium Butchery Service</h2>
          <p className="mobile_description">
            Rox Meat offers a bespoke butchery service with meat cut to your
            specific requirements, weight, and trim, saving you valuable time and
            resources.
          </p>
          <button 
            className="mobile_cta"
            onClick={handleCTAClick}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

export const Slider2 = () => {
  return <h3 className="slider_h">Follow us on Instagram</h3>;
};
