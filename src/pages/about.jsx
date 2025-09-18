import React, { useState, useContext, useEffect } from "react";
import { AppStoreContext } from "../context/createcontext";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Cart from "./cart";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  const [hideTabs, sethideTabs] = useState(false);
  const { state, changestate } = useContext(AppStoreContext);
  const { cart, changecart } = useContext(AppStoreContext);
  const { data, changedata } = useContext(AppStoreContext);
  const { BuyData, changeBuyData } = useContext(AppStoreContext);
  const [selectedData, setselectedData] = useState({});
  const [disable, setDisable] = useState(false);
  //console.log(selectedData);
  //  console.log("state",state)
  //   console.log("data", data);
  const location = useLocation();
  let history = useHistory();
  const id = location.pathname.slice(7, 8);
  // console.log(id);

  //console.log(BuyData);
  useEffect(() => {
    console.log(selectedData);

    data.map((x) => {
      if (x.id === selectedData.id) {
        setselectedData(x);
      }
    });
  }, [data]);

  useEffect(() => {
    {
      data?.map((x) => {
        if (x.id === id) {
          //console.log(x);
          setselectedData(x);
          changestate(x);
        }
      });
    }
  }, [location]);

  const AddToCart = () => {
    let newCart = JSON.parse(JSON.stringify([...cart]));
    console.log(cart);
    console.log(selectedData);
    let matched = false;
    if (cart.length === 0) {
      newCart.push(selectedData);
    } else {
      cart?.map((x, idx) => {
        console.log(x.id);
        console.log(selectedData.id);
        if (x.id === selectedData.id) {
          console.log(x);
          // x.quantity += cartData.quantity
          newCart[idx].quantity = Number(newCart[idx].quantity) + 1;
          matched = true;
          return;
        }

        // else if(x.id !== selectedData.id){
        //   if (pushed === false) {

        //     console.log(selectedData);
        //     newCart.push(selectedData);
        //     pushed = true
        //   }

        // }
      });

      if (!matched) {
        newCart.push(selectedData);
      }
    }
    console.log(newCart);
    // setcartData(newCart);

    changecart(newCart);
    console.log(cart);
  };
  //console.log('cart', cart)
  const add = () => {
    setselectedData({
      ...selectedData,
      quantity: Number(selectedData.quantity) + 1,
    });
    let newCart = [];
    cart?.map((x, idx) => {
      if (x.id === selectedData.id) {
        console.log(x);
        // x.quantity += cartData.quantity
        x.quantity = Number(x?.quantity) + 1;
        newCart.push(x);
      } else {
        newCart.push(x);
      }
    });
    changecart(newCart);
  };
  // console.log("number ", number);
  // console.log("cartdata" ,cartData)
  // console.log(state);
  const sub = () => {
    if (selectedData.quantity === 0) {
      setDisable(true);
      console.log(disable);
      setselectedData({ ...selectedData, quantity: 0 });
    } else {
      setselectedData({
        ...selectedData,
        quantity: Number(selectedData.quantity) - 1,
      });
      let newCart = [];
      cart?.map((x, idx) => {
        if (x.id === selectedData.id) {
          console.log(x);
          // x.quantity += cartData.quantity
          x.quantity = Number(x?.quantity) - 1;
          newCart.push(x);
        } else {
          newCart.push(x);
        }
      });
      changecart(newCart);
    }
    console.log(selectedData);
  };
  return (
    <div className="about">
      <div className="row m-0 p-0">
        <div className="col-md-6">
          <img className="itemImg" src={selectedData?.imgName} alt="" />
        </div>
        <div className="col-md-6">
          <div className="item_detail">
            <h5>{selectedData?.desc} </h5>
            <p>Size($12.99/kg*)</p>
            <p>Type : {selectedData?.type}</p>
            <button className="btn_weigth">Approx. 2.8kg</button>
            <div className="mb-4">
              <p>Quantity</p>
              <button onClick={sub} className="q_btn">
                -
              </button>
              <span className="q_box">{selectedData.quantity}</span>
              <button onClick={add} className="q_btn">
                +
              </button>
            </div>
            <h5>{selectedData?.price}</h5>
            <span>Tax included. Shipping calculated at checkout.</span> <br />
            <div className="row btns">
              <div className="col-md-6">
                <button
                  className="btn_item_white "
                  onClick={() => {
                    AddToCart();
                    sethideTabs(true);
                  }}
                >
                  ADD TO CART
                </button>
              </div>

              {hideTabs && (
                <div className="cart_box cart_box_web">
                  <div className="row ">
                    <div className="col-md-6">
                      <h3>Shopping Cart</h3>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2">
                      <button
                        className="btn"
                        onClick={() => sethideTabs(false)}
                      >
                        <MdClose className="close_icon" />
                      </button>
                    </div>
                  </div>
                  <Cart
                    add={add}
                    sub={sub}
                    setselectedData={setselectedData}
                    selectedData={selectedData}
                  />
                </div>
              )}
              <div className="col-md-6">
                <button
                  className="btn_item_yellow"
                  onClick={() => {
                    changeBuyData(selectedData);
                  }}
                >
                  <Link to="/buynow">BUY IT NOW</Link>
                </button>
              </div>
            </div>
            <p>
              Pickup available at <b>Rox Meat</b> <br />
              Usually ready in 24 hours <br />
            </p>
            <span>
              <b>Description</b>
              <br />
              Scored with rosemary and garlic. <br />
              Approximate weight includes bone in <br />
            </span>
            <p>
              <b>
                *Please note that our prices are subject to change due to the
                market price fluctuation, so it may differ at the time of
                purchase.
              </b>
            </p>
            <span>
              <b>DISCLAIMER:</b> All pictures shown are for illustration
              purposes only. The actual product may vary from the images shown
              on the website.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
