import React, { useContext } from "react";
import { AppStoreContext } from "../context/createcontext";
import CheckoutLeft1 from "../customcomponents/checkoutLeft1";
import CheckoutRight from "../customcomponents/checkoutRight";

const Checkout1 = () => {
  const { cart, changecart } = useContext(AppStoreContext);

  return (
    <div>
      <div className="checkout_body">
      <div className="row">
        <div className="col-md-7 ">
          <CheckoutLeft1 />
        </div>
        <div className="col-md-5 checkout_mob">
          <CheckoutRight data={cart} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout1;
