import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="h-wrapper">
      <div className="h-left">
        <div className="h-name">Rabiul</div>
        <span>toggle</span>
      </div>
      <div className="h-right">
        <div className="h-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>resume</li>
          </ul>
        </div>
        <button className="button h-button">contact me</button>
      </div>
    </div>
  );
}
