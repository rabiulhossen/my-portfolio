import React from "react";
import "./Intro.css";
import facebook from "../../../src/images/529-removebg-preview.png";
import github from "../../../src/images/github.png";
import rabiul from "../../../src/images/instagrajm.png";
import insta from "../../../src/images/instagram.png";
import bg from "../../../src/images/abtract-background-3.jpg";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Rabiul Hossen</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            saepe, aperiam velit nisi eius distinctio dolor dicta itaque
            temporibus illum voluptas perspiciatis sunt quam natus autem,
            tenetur beatae dolore. Veniam?
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="social-icons">
          <a href="">
            {" "}
            <img src={facebook} style={{ width: "75px" }} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={github} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
      <div className="intro-right"></div>

      <img src={bg} style={{ width: "31rem", height: "28rem" }} alt="" />
    </div>
  );
}
