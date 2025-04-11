
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/gallery">Sketch Gallery</Link>
      <Link to="/design-lab">Design Lab</Link>
      <Link to="/reels">Reels</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
