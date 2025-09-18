import React, { useContext, useState } from "react";
import { FaLock } from "react-icons/fa";
import { AppClientContext } from "../context/clientcontext";

const CreditCard = () => {

    const [formData, setFormData] = useState({
       
        card_no: "",
        card_name: "",
        expiry_date: "",
        security_code: "",
      });
      console.log(formData);
    
      const handleChange = (e) => {
        console.log(e.target.name);
          let name = e.target.name;
          let value = e.target.value;
           console.log(value);
          setFormData({ ...formData, [name]: value });
       
      };
      console.log(formData);
     
  return (
    <div className="row payment_body ">
      <div className="col-md-12">
        <textarea
          type="text"
          onChange={handleChange}
          value={formData.card_no}
          className="pay_input"
          name="card_no"
          placeholder="Card Number"
        />
      </div>
      <div className="col-md-12">
        <textarea
          type="text"
          onChange={handleChange}
          value={formData.card_name}
          className="pay_input"
          name="card_name"
          placeholder="Name on Card"
        />
      </div>
      <div className="col-md-6">
        <textarea
          type="text"
          onChange={handleChange}
          value={formData.expiry_date}
          className="pay_input"
          name="expiry_date"
          placeholder="Expiration Date ( MM/YY ) "
        />
      </div>
      <div className="col-md-6">
        <textarea
          type="text"
          onChange={handleChange}
          value={formData.security_code}
          className="pay_input"
          name="security_code"
          placeholder="Security Code"
        />
      </div>
    </div>
  );
};

export default CreditCard;

export const Klarna = () => {
  return (
    <div className="row payment_body ">
      <p className="pay_text">
        After clicking “Review order”, you will be redirected to Buy now, pay
        later with Klarna to complete your purchase securely.
      </p>
    </div>
  );
};
export const NewAddress = () => {
  const { ShippingData, changeShippingData } = useContext(AppClientContext);
  //const { Data, changeData } = useContext(AppClientContext);

  //const [ShippingData, setShippingData] = useState([]);

  const [formData, setFormData] = useState({
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

    if (formData.email === "" && formData.address === "") {
      alert("Please ecomplete your information");
    } else {
      console.log(value);
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log(formData);
  //changeData(formData);


  return (
    
        <div className="Shipping_body row payment_body ">
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
       
      </div>
    </div>
    
  );
};
