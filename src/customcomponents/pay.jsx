import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../assets/logo.jfif";
import { AppClientContext } from "../context/clientcontext";
import { AppStoreContext } from "../context/createcontext";

const KEY =
  "pk_test_51Jgwv4LOgka7dHsOYtrycbmMt65VDOVd5IZkkMNlGbc5gRaq8EsKfGZQCIOURktq4SyYbvfKEiAmZSyhM6XxMRbE00AzRX5O0U";

const Pay = () => {
  const [StripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };
  const { total, changeTotal } = useContext(AppStoreContext);
  const { card, changecard } = useContext(AppClientContext);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://localhost:5000/payment",
          {
            tokenId: StripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        changecard(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    //  StripeToken && makeRequest
  }, [StripeToken]);
console.log(card)
  return (
    <div className="row payment_body">
      <StripeCheckout
        name="Rox Meat"
        image={logo}
        amount={total*100}
        token={onToken}
        stripeKey={KEY}
      >
        {/* <form action="/create-checkout-session" method="POST"> */}
          <button className="Pay_btn" type="submit">
            Pay
          </button>
        {/* </form> */}
      </StripeCheckout>
    </div>
  );
};

export default Pay;
