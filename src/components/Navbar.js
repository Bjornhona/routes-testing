import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to={'/login'}>login</Link>
        <Link to={'/signup'}>signup</Link>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/products/1234'}>Detail</Link>
      </div>
    )
  }
}

export default Navbar;
