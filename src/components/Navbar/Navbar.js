import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
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
      <form action="#" method="GET" className="navbar__search-form">
        <ion-icon name="search-outline"></ion-icon>
          <input
          className="navbar__search-input"
          type="text"
          placeholder="Search"
        />
      </form>
    </nav>
  );
}
