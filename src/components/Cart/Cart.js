import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart)

  // cart calculation
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h1>Order summery</h1>
      <div className="my-cart">
        <h4>selected item: {quantity}</h4>
      </div>
      <div className="my-cart">
        <h4>Total price: ${total}</h4>
      </div>
      <div className="my-cart">
        <h4>Total shipping: ${shipping}</h4>
      </div>
      <div className="my-cart">
        <h4>Tax: ${tax}</h4>
      </div>
      <div className="my-cart">
        <h4>Grand-Total: ${grandTotal}</h4>
      </div>
    </div>
  );
};

export default Cart;
