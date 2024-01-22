
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import "./Navbar.css";
import "./Input.css";

export const Navbar = ({cart}) => {
  return (
    <div className="navbar_navbar">
      <div className="navbar_logo">
        <Link to="/home">
          <img src="denite1.png" alt="Denitelogo" />
        </Link>
      </div>
      <div className="navbar_links">
        <Link to="/top-categories"> Top Categories </Link>
        <Link to="/fruits-and-vegetables"> Fruits & Vegetables </Link>
        <Link to="/cold-drinks-and-juices">Cold Drinks & Juices </Link>
        <Link to="/snacks-and-munchies"> Snacks & Munchies </Link>
        <Link to="/featured-brands"> Featured Brands </Link>
      </div>
      <div className="navbar_login-cart">
      <Link to="/login" className="navbar_login"> Login </Link>
        <Link to="/cart" className="navbar_cart">
          <ShoppingCart size={32} />
          Cart ({cart.length})
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};
