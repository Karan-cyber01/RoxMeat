import React, { useState } from "react";
import { MdEmail , MdPhone  } from "react-icons/md";

const Contactform = () => {
  const [Data , setData] = useState([]) 
  const [formData, setFormData] = useState(
    {
        name: "",
        email: "",
        phone: "",
        comment: "",
      });
  console.log(formData);

  const handleChange = (e) => {
    console.log(e.target.name);
    let name =  e.target.name;
    let value = e.target.value;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const SendMsg = (e) =>{
    setData([ ...Data, formData])
    setFormData({
        name: "",
        email: "",
        phone: "",
        comment: "",
    })
  }
  console.log(Data)

  return (
    <div className="contact_body">
      <div className="contact_wrapper">
        <div className="row">
          <h3>Contact Us</h3>
        </div>
        <div className="row">
          <div className="col-md-6 contact_form">
            <div className="form">
              <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="Name"
              />
              <input
                type="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                placeholder="Your Email"
              />
              <input
                type="number"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                placeholder="Phone (Optional)"
              />
              <textarea
                name="comment"
                rows="3"
                onChange={handleChange}
                value={formData.comment}
                placeholder="Message Here"
              ></textarea>
              <div className="row contact_margin">
                <div className="col-2 checkbox">
                  <input type="checkbox" />
                </div>
                <div className="col-10">
                  <span className="contact_term">
                    I accept Privacy Policy and Terms & Conditions
                  </span>
                </div>
              </div>
              <button 
              onClick={(e)=>{
                  SendMsg(e);
              }}
              
              className="btn_msg">SEND MESSAGE</button>
            </div>
          </div>

          <div className="col-md-6 contact_box">  
            <div className="contact_data">
              <h5>Rox Meat Limited</h5>
              <span className="contact_details">
                11 Passey Pl, London SE9 5DA <br />
                Company number 10848899 <br />
                <MdPhone className="contact_icon"/> 020 8855 5757 <br />
                <MdEmail className="contact_icon"/> info@roxmeat.com <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
