import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.cart);
  const { cart } = props;
  const total = cart.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  const shipping = cart.reduce((acc, current) => {
    return acc + current.shipping;
  }, 0);
  const beforeTax = total + shipping;
  const tax = (beforeTax * 10) / 100;

  const totalAmount = total + shipping + tax;
  //   let total = 0;
  //   for (const product of cart) {
  //     total += product.price;
  //   }
  return (
    <div className="cart">
      <div>
        <h2>Order Summary</h2>
        <h4>Item Ordered : {props.cart.length}</h4>
      </div>
      <table>
        <thead>
          <tr>
            <td>Item : </td>
            <td>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping & Handling : </td>
            <td>${shipping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total before tax: </td>
            <td>${beforeTax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Estimated Tax: </td>
            <td>${tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Order Total: </td>
            <td>${totalAmount.toFixed(2)}</td>
          </tr>
        </thead>
      </table>
      <button className="btn">Review your order</button>
    </div>
  );
};

export default Cart;
