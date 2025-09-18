import React, { useState, useEffect , useContext } from "react";
import { MdDelete } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { AppStoreContext } from "../context/createcontext";
import {Link } from "react-router-dom"


const Cart = ({ add, sub , setselectedData , selectedData}) => {
  const { cart, changecart } = useContext(AppStoreContext);
  const { data, changedata } = useContext(AppStoreContext);
  const { total, changeTotal } = useContext(AppStoreContext);
  let history = useHistory();

  
  const delRow = (val) => {
    let index = Number(val?.index);
    //console.log(index)
    let allrows = [...cart];
    allrows.splice(index, 1);
    changecart(allrows);
  }

  useEffect(() => {
    
    console.log(cart)
    console.log(data)
      let subtotal = 0
      cart?.map((x) => {
        let price = x?.price?.split("$")[1];
        let quantity = x?.quantity
        subtotal += (quantity * price)
        changeTotal(subtotal)
      });
        let abc = []

        data.map((x)=>{
          cart.map((y)=>{
            if (x.id === y.id) {
              console.log("find")
              x.quantity = y.quantity
            }
          }
          )
         console.log(abc)
          abc.push(x)
         
        })
        changedata(abc)
        // console.log(data)
    
  }, [cart]);
  const addQtyInCart =(index)=>{
   
    let newcart = [...cart]
    newcart[index].quantity = Number(newcart[index].quantity) + 1
changecart(newcart)

  }
  const subQtyInCart =(index)=>{
   
    let newcart = [...cart]
    newcart[index].quantity = Number(newcart[index].quantity) - 1
changecart(newcart)

  }

  return (
  <div>
     <div className="cart_cart">
      {cart?.map((x , index) => {
        if (x.quantity > 0) {
          return (
            <div className="cart_row row">
              <div className="col-sm-3">
                <img className="cart_img" src={x?.imgName} alt="" />
              </div>
              <div className="col-sm-6 cart_details">
                <h5>{x?.desc} </h5>
                <p>Size($12.99/kg*)</p>
                <h5>{x?.price}</h5>
                <div className="mb-4 quantity">
                  <button onClick={()=>{
                    subQtyInCart(index)
                  }} className="q_btn">
                    -
                  </button>
                  <span className="q_box">{x.quantity}</span>
                  <button onClick={()=> {
                    addQtyInCart(index)
                    }} className="q_btn">
                    +
                  </button>
                </div>
              </div>
              <div className="col-sm-1"> 
                <MdDelete 
                onClick={(e) => {

                  delRow({ index }, e);
                }}
                 className="del" />

              </div>
            </div>
          );
        }
      })}

      <div className="instr">
        <h6>Special Instructions For Seller</h6>
        <textarea className="cart_textarea" rows="3"></textarea>
      </div>
      <div className="total">
        <h5 className="center1">Subtotal</h5>
        <h3 className="center1">${total}</h3>
        <span className="center2">
          Tax included. Shipping calculated at checkout.
        </span>
        <br />
        <button className="btn_checkout"><Link  to="/checkout">Check Out</Link></button>
      </div>
    </div>
  </div>
  );
};

export default Cart;
