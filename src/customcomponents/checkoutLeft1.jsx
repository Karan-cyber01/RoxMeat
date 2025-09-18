import React, { useContext, useState } from "react";
import logo from "../assets/logoG.png";
import {
  FaShopify,
  FaCartPlus,
  FaShippingFast,
  FaPaypal,
} from "react-icons/fa";
import Shipping, { Pickup } from "./delivery";
import { AppClientContext } from "../context/clientcontext";
import CheckoutRight from "./checkoutRight";
import { AppStoreContext } from "../context/createcontext";
import CreditCard, { Klarna, NewAddress } from "./payment";
import { Link } from "react-router-dom";
import Pay from "./pay";
import { checkout } from "./stripe";
import { useHistory } from "react-router-dom";
import Checkout1 from "../pages/checkout1";

const CheckoutLeft2 = () => {
  let history = useHistory();
  const { cart, changecart } = useContext(AppStoreContext);
  const { card, changecard } = useContext(AppClientContext);
  const [hideTabs, sethideTabs] = useState(false);
  //const { ShippingData, changeShippingData } = useContext(AppClientContext);
  const { Data, changeData } = useContext(AppClientContext);
  const { pickup, changepickup } = useContext(AppClientContext);

  const [Value, setValue] = useState("");
  console.log(Value);

  const check = ()=>{
    if(card === ""){
      alert("Please select payment option")
      history.push("/checkout1");
    }
  }

  return (
    <div className="left_checkout">
      <div className="row C_img">
        <img src={logo} alt="" />
      </div>
      <div className="row summary_btn checkout_web">
        <div className="col-md-12">
          <button
            onClick={(e) => {
              sethideTabs(!hideTabs);
            }}
            className="btn_show_order"
          >
            <FaCartPlus /> Show Order Summary
          </button>
        </div>
        {hideTabs === true && <CheckoutRight data={cart} />}
      </div>
      <div className="row delivery_border">
        <div className="grey col-md-3">Contact</div>
        <div className=" col-md-9">
          {" "}
          {Data?.email} {pickup?.email}
        </div>
      </div>
      <div className="row delivery_border">
        <div className="grey col-md-3">Ship to</div>
        <div className="col-md-9">
          {" "}
          {Data?.address} {Data?.City} {pickup?.location}{" "}
        </div>
      </div>
      <div className="pay_heading">
        <h5>Payment</h5>
        <p className="mb_pay">All transactions are secure and encrypted.</p>

        <div>
          <div className="row delivery_border">
            <div className="col-md-1">
              <input
                className="option"
                type="radio"
                value="CreditCard"
                name="payment"
                onClick={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label for="CreditCard">Credit Card</label>
            </div>
            <div className="col-md-7 Sb_right">and more...</div>
          </div>
          {Value === "CreditCard" && <Pay />}
          {/* {Value === "CreditCard" && <CreditCard />} */}
        </div>
        <div>
          <div className="row delivery_border">
            <div className="col-md-1">
              <input
                className="option"
                type="radio"
                value="klarna"
                name="payment"
                defaultChecked
                onClick={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="col-md-7">
              <label for="CreditCard">buy now,Pay later with klarna</label>
            </div>
            <div className="col-md-4 Sb_right">and more...</div>
          </div>
          {Value === "klarna" && <Klarna />}

        </div>
      </div>

      <div className="pay_heading">
        <h5>Billing Address</h5>
        <p className="mb_pay">
          Select the address that matches your card or payment method.
        </p>
        <div className="row delivery_border">
          <div className="col-md-1">
            <input
              className="option"
              type="radio"
              value="same"
              name="address"
              defaultChecked
              onClick={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col-md-11">
            <label for="CreditCard">Same as shipping address</label>
          </div>
        </div>
        <div className="row delivery_border">
          <div className="col-md-1">
            <input
              className="option"
              type="radio"
              value="different"
              name="address"
              onClick={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="col-md-11">
            <label for="CreditCard">Use a different billing address</label>
          </div>
        </div>{" "}
        {Value === "different" && <NewAddress />}
      </div>

      <div className="pay_heading">
        <h5>Remember Me</h5>
        <div className="row delivery_border">
          <div className="col-md-1">
            <input
              className="option"
              type="checkbox"
              name="remember"
              defaultChecked="true"
             
            />
          </div>
          <div className="col-md-11">
            <label for="CreditCard">
              Save my information for a faster checkout
            </label>
          </div>
        </div>
      </div>

      <div className="row p-0 m-0">
        <div className="col-md-6 p-0 m-0">
          <button className="btn_continue">
          <Link to="/thanks"><h5  onClick={(e) => check()} >Review Order</h5></Link>
          </button>
        </div>
        <div className="col-md-6 p-0 m-0">
          <button className="btn_return">
            <Link to="/checkout">Return to Shipping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft2;
