
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import "./Navbar.css";
import "./Input.css";

export const Navbar = ({cart, customer, setCustomer}) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    fetch('/logout', {
      method:'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {
      window.alert("Logged out!!")
      setCustomer(null)
      navigate('/')
    })
  }

  return (
    <div className="navbar_navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src="https://i.im.ge/2024/01/24/YvyNqJ.WhatsApp-Image-2024-01-24-at-19-35-19.jpg" alt="Denitelogo" />
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

        {customer ? (
          <div className="navbar_user">
            <h1>Welcome {customer.name}</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="navbar_login"> Login </Link>
        )}
        
      </div>

      <div className="navbar_login-cart">
      <Link to="/cart" className="navbar_cart">
          <ShoppingCart size={32} />
          Cart ({cart.length})
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};
