import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { useLocation } from "react-router-dom";
import { FaSearch, FaCartPlus, FaBars } from "react-icons/fa";
import { MdPerson, MdMenu, MdClose, MdArrowDropDown } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";

import Cart from "../pages/cart";
import { AppFilterContext } from "../context/filterdatacontext";
import { AppStoreContext } from "../context/createcontext";

const NavBar = () => {
  const { data, changedata, cart } = useContext(AppStoreContext);
  const { filteredData, changeFilterData } = useContext(AppFilterContext);
  const { checkedData, changecheckedData } = useContext(AppFilterContext);

  // Scroll effect for navbar
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //console.log(checkedData);
  const Filter = (item) => {
    console.log(item.name);
    let arr = [];
    let newcheck = [];
    checkedData.map((x) => {
      if (x.type === item.name) {
        console.log(x.checked);
        x.checked = "true";
        newcheck.push(x);
      } else {
        newcheck.push(x);
        x.checked = "false";
      }
    });
    changecheckedData(newcheck);
    data.map((data) => {
      if (item.name === data.type) {
        arr.push(data);
      }
    });
    changeFilterData(arr);
  };
  const location = useLocation();
  //console.log(location.pathname);
  const [hideTabs, sethideTabs] = useState(false);
  const [Tabs, setTabs] = useState(false);
  const [CartTabs, setCartTabs] = useState(false);

  const [navitmes, setnavitmes] = useState([
    { name: "Home", path: "/", selected: true, length: "1" },
    { name: "Shop", path: "/shop", selected: true, length: "2" },
    { name: "About Us", path: "/about", selected: false, length: "3" },
    { name: "Recipe", path: "/recipe", selected: false, length: "4" },
    { name: "Contact Us", path: "/contact", selected: false, length: "5" },
  ]);
  const [navicons, setnavicons] = useState([
    { name: "Search", path: "/search", length: "1" },
    { name: "Account", path: "/information", length: "2" },
    { name: "Cart", path: "", length: "3" },
  ]);
  const [navdropdown, setnavdropdown] = useState([
    { name: "Beef", length: "1" },
    { name: "Lamb", length: "2" },
    { name: "Chicken", length: "3" },
    { name: "Birds", length: "4" },
  ]);
  const [navdrop, setnavdrop] = useState([
    { name: "Beef", length: "1" },
    { name: "Lamb", length: "2" },
    { name: "Chicken", length: "3" },
    { name: "Birds", length: "4" },
  ]);

  return (
    <div className={`fixed-top nav_body ${scrolled ? 'nav_scrolled' : ''}`}>
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search_overlay">
          <div className="search_container">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="search_input"
              autoFocus
            />
            <button 
              className="search_close"
              onClick={() => setIsSearchOpen(false)}
            >
              <MdClose />
            </button>
          </div>
        </div>
      )}

      <div className="web">
        <div className="nav_btn">
          <div className="nav_links">
            {navitmes.map((item, index) => {
              return (
                <div key={index} className="nav_item">
                  <Link 
                    to={item.path} 
                    className={`nav_btn nav_link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav_text">{item.name}</span>
                    {item.name === "Shop" && (
                      <BiChevronDown 
                        className={`dropdown_arrow ${hideTabs ? 'rotated' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sethideTabs(!hideTabs);
                        }} 
                      />
                    )}
                  </Link>
                  {hideTabs && item.name === "Shop" && (
                    <div className="nav_dropdown_modern">
                      <div className="dropdown_content">
                        <div className="dropdown_grid">
                          {navdrop.map((dropItem, dropIndex) => {
                            return (
                              <div key={dropIndex} className="dropdown_item">
                                <Link 
                                  to="/shop"
                                  className="dropdown_link"
                                  onClick={(e) => {
                                    Filter(dropItem);
                                    sethideTabs(false);
                                  }}
                                >
                                  <span className="dropdown_text">{dropItem.name}</span>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                        <div className="dropdown_image">
                          <img className="img_dropdown" src={logo} alt="Roxmeat" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="logo_container">
          <Link to="/">
            <img src={logo} alt="Roxmeat" className="brand_logo" />
          </Link>
        </div>
        
        <div className="nav_actions">
          <div className="nav_icons">
            {navicons.map((item, index) => {
              return (
                <div key={index} className="nav_icon_wrapper">
                  {item.name === "Search" && (
                    <button 
                      className="nav_icon_btn search_btn"
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="Search"
                    >
                      <FaSearch className="nav_icon" />
                    </button>
                  )}
                  {item.name === "Account" && (
                    <Link to={item.path} className="nav_icon_btn" aria-label="Account">
                      <MdPerson className="nav_icon" />
                    </Link>
                  )}
                  {item.name === "Cart" && (
                    <button 
                      className="nav_icon_btn cart_btn"
                      onClick={() => setCartTabs(true)}
                      aria-label={`Cart (${cart?.length || 0} items)`}
                    >
                      <div className="cart_icon_container">
                        <FaCartPlus className="nav_icon" />
                        {cart && cart.length > 0 && (
                          <span className="cart_badge">{cart.length}</span>
                        )}
                      </div>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Cart Sidebar */}
      {CartTabs && (
        <>
          <div className="cart_overlay" onClick={() => setCartTabs(false)}></div>
          <div className="cart_sidebar">
            <div className="cart_header">
              <h3>Shopping Cart</h3>
              <button
                className="cart_close_btn"
                onClick={() => setCartTabs(false)}
                aria-label="Close cart"
              >
                <MdClose />
              </button>
            </div>
            <div className="cart_content">
              <Cart />
            </div>
          </div>
        </>
      )}

      {/* Mobile Navigation */}
      <div className="mobile">
        <div className="mobile_header">
          <button 
            className="mobile_menu_btn"
            onClick={() => sethideTabs(!hideTabs)}
            aria-label="Toggle menu"
          >
            <FaBars className={`menu_icon ${hideTabs ? 'open' : ''}`} />
          </button>

          <Link to="/" className="mobile_logo">
            <img src={logo} alt="Roxmeat" />
          </Link>

          <div className="mobile_actions">
            <button 
              className="mobile_icon_btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <button 
              className="mobile_icon_btn cart_btn_mobile"
              onClick={() => setCartTabs(true)}
              aria-label={`Cart (${cart?.length || 0} items)`}
            >
              <div className="cart_icon_container">
                <FaCartPlus />
                {cart && cart.length > 0 && (
                  <span className="cart_badge">{cart.length}</span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {hideTabs && (
          <>
            <div className="mobile_menu_overlay" onClick={() => sethideTabs(false)}></div>
            <div className="mobile_menu">
              <div className="mobile_menu_content">
                {navitmes.map((item, index) => {
                  return (
                    <div key={index} className="mobile_menu_item">
                      <Link
                        to={item.path}
                        onClick={() => item.name !== "Shop" && sethideTabs(false)}
                        className={`mobile_menu_link ${
                          location.pathname === item.path ? "active" : ""
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.name === "Shop" && (
                          <BiChevronDown 
                            className={`mobile_dropdown_arrow ${Tabs ? 'rotated' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setTabs(!Tabs);
                            }} 
                          />
                        )}
                      </Link>
                      {Tabs && item.name === "Shop" && (
                        <div className="mobile_submenu">
                          {navdropdown.map((dropItem, dropIndex) => {
                            return (
                              <Link 
                                key={dropIndex}
                                to="/shop"
                                className="mobile_submenu_link"
                                onClick={() => {
                                  Filter(dropItem);
                                  sethideTabs(false);
                                  setTabs(false);
                                }}
                              >
                                {dropItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
