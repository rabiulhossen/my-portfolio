import React from "react";
import "../Footer/Footer.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import wave from "../../images/abtract-background-3.jpg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Fb from "@iconscout/react-unicons/icons/uil-facebook";
import Twi from "@iconscout/react-unicons/icons/uil-twitter";
import Wave from 'react-wavify'

export default function Footer() {
  return (
    <div className="footer">
  <Wave fill="url(#gradient)"
      options={{
        height: 10,
        amplitude: 50,
        speed: 0.20,
        points: 10
      }}
  >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="30%"  stopColor="rgb(66, 247, 208)" />
      <stop offset="90%" stopColor="#22C3F4" />
    </linearGradient>
  </defs>
  
</Wave>
   
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
