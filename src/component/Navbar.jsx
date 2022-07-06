import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

function Navbar() {
  const [count,setCount]=useState(0);
  let state = useSelector((state) => state.handleCart);
  const products = JSON.parse(localStorage.getItem("products"));
  useEffect(()=>{
  setCount(products.length)
  })

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/products">Products</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-Link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/contact">Contact</Link>
              </li>

            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in" aria-hidden="true"></i>Login
              </Link>
              <Link to="/register" className="btn btn-outline-dark">
                <i class="fa fa-user-plus" aria-hidden="true"></i>Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart({(!state)?count:state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar