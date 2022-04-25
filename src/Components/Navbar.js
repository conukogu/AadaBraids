
import React, {useState} from "react";
import './styles.css'
import img from './Images/h1.png'
import {Link} from "react-router-dom";





function Navbar({menuOpen, setMenuOpen}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav>
        <div id="menuToggle">
          <input
            type="checkbox"
            value={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          ></input>

          <p className="close">
            <i className="fa fa-bars fa-3x hamburger"></i>

             <Link className="nl nl-logo" to= '/'>
              <img className="logo" src={img}></img>
            </Link>

            <Link className="nl" to= '/cart'>
              <i className="fa fa-shopping-cart fa-3x shop"></i>
            </Link>
          </p>

          <div className="nav-links">
            <Link className="nl" to= '/'>
              HOME
            </Link>

            <Link className="nl" to= '/shop'>
              PRODUCTS
            </Link>

            <Link className="nl" to= '/cart'>
              CART
            </Link>

            <Link className="nl" to= '/contact'>
              CONTACT
            </Link>

            {/* <a href="indexA.html">HOME</a>
            <a href="product.html">PRODUCTS</a>
            <a href="cart.html">CART</a>
            <a href="contact.html">CONTACT</a> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;