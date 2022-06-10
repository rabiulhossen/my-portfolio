import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { themeContext } from "../toggle/Context";
import Toggle from "../toggle/Toggle";
import "./Header.css";

export default function Header() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
            <li>
              {" "}
              <Link
                style={{ color: darkMode ? "white" : "" }}
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={2000}
                delay={500}
                isDynamic={true}
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              
              <Link
                style={{ color: darkMode ? "white" : "" }}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={2000}
                delay={500}
                isDynamic={true}
              >
                About
              </Link>
           
            </li>
            <li>
              <Link
                style={{ color: darkMode ? "white" : "" }}
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={150}
                duration={2500}
                delay={500}
                isDynamic={true}
              >
                Blog
              </Link>
            </li>
            <li>
             
            <Link
                style={{ color: darkMode ? "white" : "" }}
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={2000}
                delay={500}
                isDynamic={true}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                style={{ color: darkMode ? "white" : "" }}
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={3000}
                delay={400}
                isDynamic={true}
              >
                project
              </Link>
            </li>
          </ul>
        </div>
        <a href="https://drive.google.com/file/d/1oIkmfDf16FR3gYvDYOunX4iCXHe9g9m_/view?usp=sharing">
        <button className="button h-button">Resume </button></a>
      </div>
    </div>
  );
}
