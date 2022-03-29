import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <form className="navbar__search-form">
        <input
          className="navbar__search-input"
          type="text"
          placeholder="Search"
        />
        <button className="navbar__search-button" type="submit">
          Search
        </button>
      </form>
      <div className="navbar__items">
        <a className="navbar__item" href="#">
          Home 
        </a>
        <a className="navbar__item" href="#">
          About
        </a>
        <a className="navbar__item" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
}
