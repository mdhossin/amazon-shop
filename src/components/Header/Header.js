import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* navbar */}
      <nav className="navbar">
        <a href="/shop">Shop</a>
        <a href="/order">Oder Review</a>
        <a href="/inventory">Manage Inventory here</a>
      </nav>
    </div>
  );
};

export default Header;
