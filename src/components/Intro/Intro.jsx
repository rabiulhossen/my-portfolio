import React from "react";
import "./Intro.css";

import Typewriter from "typewriter-effect";
import linkedin from "../../../src/images/linkedin.png";
import github from "../../../src/images/github.png";
import facebook from '../../../src/images/529-removebg-preview.png'
import rabiul from "../../../src/images/instagrajm.png";
import insta from "../../../src/images/instagram.png";
import bg from "../../../src/images/profile-pic (1).png";

export default function Intro() {
  return (
    <div className="intro" id="resume">
      <div className="intro-left">
        <div className="i-name">
          <span>Hey! I Am</span>

          <span>Rabiul Hossen
            
          </span>
          <span>
          <Typewriter
              options={{
              strings:[" Web Developer","Frontend Developer",
              "ReactJs Developer"],
                autoStart: true,
                loop: true,
                pauseFor:2000,
                cursor:["."],
              }}
              
            />
          </span>
          <span>
          I am a positive, enthusiastic and competent Web Developer who, has built up a diverse range of skills, qualities and attributes. 
          </span>
        </div>
      <a className="button i-button" href="https://drive.google.com/file/d/1oIkmfDf16FR3gYvDYOunX4iCXHe9g9m_/view?usp=sharing" style={{textDecoration:'none'}}>See Resume</a>
        <div className="social-icons">
          <a href="www.linkedin.com/in/rabiulhossen">
            {" "}
            <img src={linkedin} style={{ width: "85px" }} alt="" />
          </a>
          <a href="https://github.com/rabiulhossen">
            {" "}
            <img src={github} style={{ width: "90px" }} alt="" />
          </a>
          <a href="https://web.facebook.com/muktadirr.evansimonn/">
            {" "}
            <img src={facebook}style={{ width: "80px" }} alt="" />
          </a>
          <a href="https://www.instagram.com/rabiulhossen_01/">
            {" "}
            <img src={insta}style={{ width: "88px" }} alt="" />
          </a>
        
        </div>
      </div>
      <div className="intro-right"></div>

      <img src={bg} style={{ width: "29rem", height: "29rem" }} alt="" />
    </div>
  );
}
