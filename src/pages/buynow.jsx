import React, { useContext } from "react";
import { AppStoreContext } from "../context/createcontext";
import CheckoutLeft from "../customcomponents/checkoutLeft";

const BuyNow = () => {
  const { BuyData, changeBuyData } = useContext(AppStoreContext);
  console.log(BuyData)

  return (
    <div className="checkout_body">
      <div className="row">
        <div className="col-md-7 ">
          <CheckoutLeft />
        </div>
        <div className="col-md-5 ">
        <div className="right_checkout">
            <div className="item_checkout_details">
             
                  <div className="row each_item">
                    <div className="col-md-3">
                      <div className="row qty_item">
                        <div className="col-md-2 quantity_item">
                          <span>{BuyData.quantity}</span>
                        </div>
                      </div>
                      <img className="checkout_img" src={BuyData.imgName} alt="" />
                    </div>
                    <div className="col-md-6">
                      <span>
                        <b>{BuyData.desc}</b> <br />
                      </span>{" "}
                      <p> Approx. 2.8kg</p>
                    </div>
                    <div className="col-md-3">{BuyData.price}</div>
                  </div>
             
            </div>
            <hr />
            <div className="row checkout_details">
              <div className="col-md-9">
                <input  type="text" placeholder="Gift Card or Discount Code"/>
              </div>
              <div className="col-md-3"><button className="btn_apply">Apply</button></div>
            </div>
            <hr />
            <div className="subtotal_checkout">
              <div className="row">
                <div className="col-md-6"><span>Subtotal</span></div>
            <div className="col-md-6 Sb_right"><span ><b className="Sb_right">$ {BuyData.price}</b></span></div>
              </div>
              <div className="row">
                <div className="col-md-6"><span>Shipping </span></div>
                <div className="col-md-6 Sb_right"><p className="f_small">Calculating at next step</p></div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6"><span>Total</span>  <br /> <p>Including $ 15 in taxes</p>
                </div>
                <div className="col-md-6 Sb_right">GDP<span className="f_large"> <b >${BuyData.price}</b></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
