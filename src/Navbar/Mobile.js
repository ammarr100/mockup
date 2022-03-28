import React from 'react';
import { NavLink } from 'react-router-dom';

const Mobile = () => {
  return (
      <>
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/design">Design</NavLink></li>
              <li><NavLink to="/strategy">Strategy</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </>
  ) 
};

export default Mobile;
