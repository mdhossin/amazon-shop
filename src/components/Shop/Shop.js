import React, { useEffect, useState } from "react";

import Cart from "../Cart/Cart";

import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handelChange = (event) => {
    const searchText = event.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchedProduct);
    setDisplayProducts(matchedProduct);
  };
  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            onChange={handelChange}
            type="text"
            placeholder="Search your product here"
          />
          {/* <span>{props}</span> */}
        </div>
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              cartBtn={addToCart}
              obj={product}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Shop;
