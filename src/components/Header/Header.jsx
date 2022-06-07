import React from "react";
import Toggle from "../toggle/Toggle";
import "./Header.css";

export default function Header() {
  return (
    <div className="h-wrapper">
      <div className="h-left">
        <div className="h-name">Rabiul</div>
        <Toggle />
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
        <button className="button h-button">contact </button>
      </div>
    </div>
  );
}
