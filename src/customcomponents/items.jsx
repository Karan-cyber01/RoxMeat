import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppStoreContext } from "../context/createcontext";
import { FaShoppingCart, FaHeart, FaEye, FaStar } from "react-icons/fa";

const Items = ({ heading, data }) => {
  const { state, changestate, cart, changecart } = useContext(AppStoreContext);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [loadingItems, setLoadingItems] = useState({});
  const [favorites, setFavorites] = useState([]);
  let history = useHistory();

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    setLoadingItems(prev => ({ ...prev, [item.id]: true }));
    
    // Simulate loading
    setTimeout(() => {
      const existingCart = cart || [];
      const existingItem = existingCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        const updatedCart = existingCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: parseInt(cartItem.quantity) + 1 }
            : cartItem
        );
        changecart(updatedCart);
      } else {
        changecart([...existingCart, { ...item, quantity: 1 }]);
      }
      
      setLoadingItems(prev => ({ ...prev, [item.id]: false }));
    }, 800);
  };

  const handleToggleFavorite = (e, itemId) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleViewDetails = (item) => {
    changestate(item);
    history.push("./about/" + item.id);
  };

  return (
    <div className="feed_body">
      <div className="section_header">
        <h4 className="section_heading">{heading}</h4>
        <div className="heading_underline"></div>
      </div>
      
      <div className="items_grid">
        {data?.map((item, index) => {
          const isHovered = hoveredItem === item.id;
          const isLoading = loadingItems[item.id];
          const isFavorite = favorites.includes(item.id);
          
          return (
            <div
              key={item.id}
              className={`item_card ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleViewDetails(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="item_image_container">
                <img 
                  className="item_image" 
                  src={item.imgName} 
                  alt={item.desc}
                  loading="lazy"
                />
                
                {/* Overlay Actions */}
                <div className={`item_overlay ${isHovered ? 'visible' : ''}`}>
                  <button
                    className={`action_btn favorite_btn ${isFavorite ? 'active' : ''}`}
                    onClick={(e) => handleToggleFavorite(e, item.id)}
                    aria-label="Add to favorites"
                  >
                    <FaHeart />
                  </button>
                  
                  <button
                    className="action_btn view_btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(item);
                    }}
                    aria-label="View details"
                  >
                    <FaEye />
                  </button>
                  
                  <button
                    className={`action_btn cart_btn ${isLoading ? 'loading' : ''}`}
                    onClick={(e) => handleAddToCart(e, item)}
                    disabled={isLoading}
                    aria-label="Add to cart"
                  >
                    {isLoading ? (
                      <div className="loading_spinner"></div>
                    ) : (
                      <FaShoppingCart />
                    )}
                  </button>
                </div>

                {/* Category Badge */}
                <div className="category_badge">{item.type}</div>
                
                {/* Rating */}
                <div className="rating_container">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`star ${i < 4 ? 'filled' : ''}`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="item_content">
                <h5 className="item_title">{item.desc}</h5>
                <div className="item_price_container">
                  <span className="item_price">{item.price}</span>
                  <span className="price_label">/ {item.quantity} piece</span>
                </div>
                
                {/* Quick Add Button for Mobile */}
                <button
                  className={`quick_add_btn ${isLoading ? 'loading' : ''}`}
                  onClick={(e) => handleAddToCart(e, item)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="loading_spinner"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <FaShoppingCart />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="view_all_container">
        <button className="btn_view_all">
          <span>View All Products</span>
          <div className="btn_arrow">→</div>
        </button>
      </div>
    </div>
  );
};

export default Items;
