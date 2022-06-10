import React from "react";
import { Link } from "react-scroll";
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
          {/* <div className="toggler" 
          style={{display:'none'}}
          >bb</div> */}
          <ul>
            <li> <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={2000}
            delay={500}
            isDynamic={true}
           >Home</Link></li>
            <li> <Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={2000}
      delay={500}
      isDynamic={true}>About</Link></li>
            <li><Link activeClass="active"
      to="blog"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={2000}
      delay={500}
      isDynamic={true}
>
  Blog
</Link></li>
            <li><Link activeClass="active"
      to="services"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={2000}
      delay={500}
      isDynamic={true}>services</Link> </li>
            <li ><Link activeClass="active"
      to="resume"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={3000}
      delay={400}
      isDynamic={true}>resume</Link></li>
          </ul>
        </div>
        <button className="button h-button">contact </button>
      </div>
    </div>
  );
}
