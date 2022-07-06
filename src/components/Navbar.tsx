import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper pink darken-2 px1">
        <a href="#" className="brand-logo">React(TS) - COUNTERS</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Счетчики</Link></li>
          <li><Link to="about">Обо мне</Link></li>
        </ul>
      </div>
    </nav>
  );
};