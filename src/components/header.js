import React from "react";
import "../style/app.css";

export default function Header() {
  return (
    <nav>
      <div className="logo">Healing Traveller</div>
      <ul>
        <li>Home</li>
        <li>Package</li>
        <li>Shope</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="seacrh">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  );
}
