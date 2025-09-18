import React, { useContext } from 'react'
import { FaApplePay } from 'react-icons/fa';
import { AppStoreContext } from '../context/createcontext';



const CheckoutRight = ({data}) => {
   const Apply = () => {
    alert("This Discount Code is not valid")
   }

  const { total, changeTotal } = useContext(AppStoreContext) ;
  return (
    <div className="right_checkout">
            <div className="item_checkout_details">
              {data.map((item) => {
                return (
                  <div className="row each_item">
                    <div className="col-md-3">
                      <div className="row qty_item">
                        <div className="col-md-2 quantity_item">
                          <span>{item.quantity}</span>
                        </div>
                      </div>
                      <img className="checkout_img" src={item.imgName} alt="" />
                    </div>
                    <div className="col-md-6">
                      <span>
                        <b>{item.desc}</b> <br />
                      </span>{" "}
                      <p> Approx. 2.8kg</p>
                    </div>
                    <div className="col-md-3">{item.price}</div>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="row checkout_details">
              <div className="col-md-9">
                <input  type="text" placeholder="Gift Card or Discount Code"/>
              </div>
              <div className="col-md-3"><button  onClick={(e) => Apply()} className="btn_apply">Apply</button></div>
            </div>
            <hr />
            <div className="subtotal_checkout">
              <div className="row">
                <div className="col-md-6"><span>Subtotal</span></div>
            <div className="col-md-6 Sb_right"><span ><b className="Sb_right">$ {total}</b></span></div>
              </div>
              <div className="row">
                <div className="col-md-6"><span>Shipping </span></div>
                <div className="col-md-6 Sb_right"><p className="f_small">Calculating at next step</p></div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6"><span>Total</span>  <br /> <p>Including $ 15 in taxes</p>
                </div>
                <div className="col-md-6 Sb_right">GDP<span className="f_large"> <b >${total}</b></span></div>
              </div>
            </div>
          </div>
  )
}

export default CheckoutRight