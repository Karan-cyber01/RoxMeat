import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='thanks_body'>
        <div className='row'>
            <div className='col-md-12'><h2>Order Confirmed </h2></div>
            <div className='col-md-12'><h6>Thanks for choosing us!</h6></div>
            <div className='col-md-12'><p>You made the best decision </p></div>
            <div className='col-md-4'>
            <Link to="/shop" ><button className='btn_shop'>Shop Again</button></Link></div>
        </div>
    </div>
  )
}

export default Thanks