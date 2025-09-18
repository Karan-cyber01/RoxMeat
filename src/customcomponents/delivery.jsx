import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppClientContext } from "../context/clientcontext";
import { useHistory } from "react-router-dom";

const Shipping = ({ email_val }) => {
  let history = useHistory();
  const { ShippingData, changeShippingData } = useContext(AppClientContext);
  const { Data, changeData } = useContext(AppClientContext);

  //const [ShippingData, setShippingData] = useState([]);

  const [formData, setFormData] = useState({
    email: email_val,
    country: "",
    first_name: "",
    last_name: "",
    company: "",
    address: "",
    appartment: "",
    city: "",
    postcode: "",
    phone: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);
    setFormData({ ...formData, [name]: value });
    // if (formData.email === "" && formData.address === "" ) {
    //   alert("Please ecomplete your information");
    // } else {

    // }
  };
  console.log(formData);
  changeData(formData);

  const ContinueShipping = (e) => {
    if (
      email_val === "" ||
      formData.address === "" ||
      formData.appartment === "" ||
      formData.city === "" ||
      formData.phone === ""
    ) {
      alert("Please enter your complete address");
      history.push("/checkout");
    }

    changeShippingData([...ShippingData, formData]);
  };
  console.log(ShippingData);

  return (
    <div className="Shipping_body row p-0 m-0">
      <h6>Shipping Address</h6>
      <div className="col-md-12 m-0 p-0">
        <input
          placeholder="Country/region"
          onChange={handleChange}
          value={formData.country}
          type="text"
          name="country"
          id=""
        />
      </div>
      <div className="col-md-6 m-0 p-0">
        <input
          placeholder="First Name"
          onChange={handleChange}
          value={formData.first_name}
          type="text"
          name="first_name"
          id=""
        />
      </div>
      <div className="col-md-6 s_right m-0 p-0">
        <input
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.last_name}
          type="text"
          name="last_name"
          id=""
        />
      </div>
      <div className="col-md-12 m-0 p-0">
        <input
          placeholder="Company(Optional)"
          onChange={handleChange}
          value={formData.company}
          type="text"
          name="company"
          id=""
        />
      </div>
      <div className="col-md-12 m-0 p-0">
        <input
          placeholder="Address"
          onChange={handleChange}
          value={formData.address}
          type="text"
          name="address"
          id=""
        />
      </div>
      <div className="col-md-12 m-0 p-0">
        <input
          placeholder="Appartment,suite,etc (Optional)"
          onChange={handleChange}
          value={formData.appartment}
          type="text"
          name="appartment"
          id=""
        />
      </div>
      <div className="col-md-6 m-0 p-0">
        <input
          placeholder="City"
          onChange={handleChange}
          value={formData.city}
          type="text"
          name="city"
          id=""
        />
      </div>
      <div className="col-md-6 s_right m-0 p-0">
        <input
          placeholder="Postcode"
          onChange={handleChange}
          value={formData.postcode}
          type="text"
          name="postcode"
          id=""
        />
      </div>
      <div className="col-md-12 m-0 p-0">
        <input
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
          type="text"
          name="phone"
          id=""
        />
        <div className="row">
          <div className="col-md-1">
            <input
              placeholder="Email or Mobile phone number"
              className="input"
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
        <div className="row p-0 m-0">
          <div className="col-md-6 p-0 m-0">
            <button className="btn_continue">
              <h5
                onClick={(e) => {
                  ContinueShipping(e);
                }}
              >
                <Link to="/checkout1">Continue to Payment</Link>
              </h5>
            </button>
          </div>
          <div className="col-md-5">
            <button className="btn_return">Return to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

export const Pickup = ({ email_val }) => {
  let history = useHistory();

  const { location, changelocation } = useContext(AppClientContext);
  const { pickup, changepickup } = useContext(AppClientContext);
  //changelocation("Rox Meat")
  console.log(location);

  useEffect(() => {
    setPickupData({
      email: email_val,
      location: location,
    });
    changepickup(PickupData);
  }, [location]);

  const [PickupData, setPickupData] = useState({
    email: email_val,
    location: location,
  });
  changepickup(PickupData)
  // console.log(PickupData);
  // console.log(pickup);
  const ContinuePickup = (e) => {
    if (email_val === "") {
      alert("Please enter email");

      history.push("/checkout");
    } else {
      console.log("pickup");
      console.log(email_val);
    }
  };
  return (
    <div className="pickup">
      <h6>Pickup Locations</h6>

      <div className="row pickup_border">
        <div className="col-md-1">
          <input
            className="option"
            
            onClick={(e) => changelocation(e.target.value)}
            type="radio"
            value="Rox Meat"
            name="location"
            defaultChecked
          />
        </div>
        <div className="col-md-7">
          <label for="pickup">
            <div className="row">
              <div className="col-md-12">
                Rox Meat <br />
                <p>37- 39 Spary Street ,London</p>
              </div>
            </div>
          </label>
        </div>
        <div className="col-md-4 p_right">
          <b>Free</b> <br /> <p>usually used in 24 hours</p>
        </div>
      </div>
      <div className="row pickup_border">
        <div className="col-md-1">
          <input
            className="option"
            type="radio"
            onClick={(e) => changelocation(e.target.value)}
            value="Rox Meat Elthem"
            name="location"
          />
        </div>
        <div className="col-md-7">
          <label for="pickup">
            <div className="row">
              <div className="col-md-12">
                Rox Meat Elthem
                <br />
                <p>11 Passey Place ,London</p>
              </div>
            </div>
          </label>
        </div>
        <div className="col-md-4 p_right">
          <b>Free</b> <br /> <p>usually used in 24 hours</p>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-6 p-0 m-0">
          <button className="btn_continue">
            <h5
              onClick={(e) => {
                ContinuePickup(e);
              }}
            >
              <Link to="/checkout1">Continue to Payment</Link>
            </h5>
          </button>
        </div>
        <div className="col-md-5">
          <button className="btn_return">Return to Cart</button>
        </div>
      </div>
    </div>
  );
};
