import React from "react";
import "../Footer/Footer.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import wave from "../../images/abtract-background-3.jpg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Fb from "@iconscout/react-unicons/icons/uil-facebook";
import Twi from "@iconscout/react-unicons/icons/uil-twitter";
export default function Footer() {
  return (
    <div className="footer">
      <div className="waves">
        <div className="wave" id="wave"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="f-content">
        <li>
          {" "}
          <a href="">
            {" "}
            <Insta color="black" size="3rem" />
          </a>
        </li>
        <li>
          {" "}
          <a href="">
            {" "}
            <Fb color="black" size="3rem" />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="">
            <Github color="black" size="3rem" />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="">
            <Twi color="black" size="3rem" />
          </a>{" "}
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Terms</a>
        </li>
      </ul>
      <p>All Right Reseerved by R-2022</p>
    </div>
  );
}
