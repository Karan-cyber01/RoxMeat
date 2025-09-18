import React, { useContext, useState } from "react";
import { AppStoreContext } from "../context/createcontext";
import CheckoutRight from "../customcomponents/checkoutRight";
import logo from "../assets/logoG.png";
import {
  FaShopify,
  FaCartPlus,
  FaShippingFast,
  FaPaypal,
} from "react-icons/fa";
import Shipping, { Pickup } from "./delivery";

const CheckoutLeft = () => {
  const { cart, changecart } = useContext(AppStoreContext);
  const [hideTabs, sethideTabs] = useState(false);
  const [Value, setValue] = useState("");

  const [email_val, setemail_val] = useState("");
  const handleChange = (e) => {
    //console.log(e.target.name);
    setemail_val(e.target.value);
    console.log(email_val);
  };

  console.log(email_val);

  return (
    <div className="left_checkout">
      <div className="row C_img">
        <img src={logo} alt="" />
      </div>
      <div className="row">
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
        <p className="_center">Express checkout</p>
        <div className="mb">
          <div className="row btn_check_row">
            <div className="col-md-6">
              <button className="btn_pay purple ">
                Shop <FaShopify />
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn_pay black ">
                Google <FaShopify />
              </button>
            </div>
          </div>
        </div>
        <p className="_center">OR</p>
        <hr />
        <div className="checkout_form">
          <div className="row">
            <div className="row p-0 m-0">
              <h6>Contact Information</h6>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email or Mobile Phone no"
                required
                id="email"
              />
              <div className="row">
                <div className="col-md-1">
                  <input
                    placeholder="Email or Mobile phone number"
                    className="option"
                    type="checkbox"
                    defaultChecked="true"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <span>Email me with new and offers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h6>Delivery Method</h6>
            <div className="row ">
              <div>
                <div className="row delivery_border">
                  <div className="col-md-1">
                    <input
                      className="option"
                      type="radio"
                      value="ship"
                      name="delivery"
                      onClick={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <label for="ship">
                      <FaShippingFast /> Ship
                    </label>
                  </div>
                </div>
                <div className="row delivery_border">
                  <div className="col-md-1">
                    <input
                      className="option"
                      type="radio"
                      value="pickup"
                      name="delivery"
                      onClick={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <label for="pickup">
                      <FaPaypal /> Pick up
                    </label>
                  </div>
                </div>
              </div>
              {Value === "pickup" && <Pickup email_val={email_val} />}
              {Value === "ship" && <Shipping email_val={email_val} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;

// export const CheckoutMob = () => {
//   const { cart, changecart } = useContext(AppStoreContext);

//   const [Value, setValue] = useState("");

//   const [hideTabs, sethideTabs] = useState(false);

//   const [email_val, setemail_val] = useState("");
//   const handleChange = (e) => {
//     //console.log(e.target.name);
//     setemail_val(e.target.value);
//     console.log(email_val);
//   };

//   console.log(email_val);

//   return (
//     <div className="left_checkout_mob">
//       <div className="row C_img">
//         <img src={logo} alt="" />
//       </div>
//      <div className="row">

//      </div>
//       <div className="row">
//       <div className="row summary_btn">
//         <div className="col-md-12">
//         <button
//           onClick={(e) => {
//             sethideTabs(!hideTabs);
//           }}
//           className="btn_show_order"
//         >
//           <FaCartPlus /> Show Order Summary
//         </button>
//         </div>
//          {(hideTabs === true && <CheckoutRight  data={cart} />)}
//       </div>
//         <p className="_center">Express checkout</p>
//         <div className="mb">
//           <div className="row btn_check_row">
//             <div className="col-md-6">
//               <button className="btn_pay purple ">
//                 Shop <FaShopify />
//               </button>
//             </div>
//             <div className="col-md-6">
//               <button className="btn_pay black ">
//                 Google <FaShopify />
//               </button>
//             </div>
//           </div>
//         </div>
//         <p className="_center">OR</p>
//         <hr />
//         <div className="checkout_form">
//           <div className="row">
//             <div className="row p-0 m-0">
//               <h6>Contact Information</h6>
//               <input
//                 type="text"
//                 name="email"
//                 onChange={handleChange}
//                 placeholder="Email or Mobile Phone no"
//                 required
//                 id="email"
//               />
//               <div className="row">
//                 <div className="col-md-1">
//                   <input
//                     placeholder="Email or Mobile phone number"
//                     className="input"
//                     type="checkbox"
//                     defaultChecked="true"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div className="col-md-10">
//                   <span>Email me with new and offers</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <h6>Delivery Method</h6>
//             <div className="row ">
//               <div>
//                 <div className="row delivery_border">
//                   <div className="col-md-1">
//                     <input
//                       className="input"
//                       type="radio"
//                       value="ship"
//                       name="delivery"
//                       onClick={(e) => setValue(e.target.value)}
//                       id=""
//                     />
//                   </div>
//                   <div className="col-md-3">
//                     {" "}
//                     <label for="ship">
//                       <FaShippingFast /> Ship
//                     </label>
//                   </div>
//                 </div>
//                 <div className="row delivery_border">
//                   <div className="col-md-1">
//                     <input
//                       className="input"
//                       type="radio"
//                       value="pickup"
//                       name="delivery"
//                       onClick={(e) => setValue(e.target.value)}
//                       id=""
//                     />
//                   </div>
//                   <div className="col-md-3">
//                     <label for="pickup">
//                       <FaPaypal /> Pick up
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               {Value === "pickup" && <Pickup />}
//               {Value === "ship" && <Shipping email_val={email_val} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
