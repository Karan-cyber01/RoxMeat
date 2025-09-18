const express = require('express');
const app = express();
const stripe = require('stripe')('pk_test_51Jgwv4LOgka7dHsOYtrycbmMt65VDOVd5IZkkMNlGbc5gRaq8EsKfGZQCIOURktq4SyYbvfKEiAmZSyhM6XxMRbE00AzRX5O0U')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));


import React from 'react'

const Stripebtn = () => {
  return (
    // <div className='acb'><form action="/create-checkout-session" method="POST">
    //   <button type="submit">Checkout</button>
    //   <div>hello</div>
    // </form></div>
    <div>hello</div>
  )
}

export default Stripebtn