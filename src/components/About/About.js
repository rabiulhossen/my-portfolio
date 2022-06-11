import React from "react";
import "./About.css";
import rabiul from "../../images/profile-pic (1).png";

export default function About() {


  return (
    
     <div className="about"  id="about">
          

    <div className="intro">
      <div className="intro-left">
        <div className="i-name">
          <span>Hey! I Am</span>

          <span>Rabiul Hossen</span>
          <span></span>
          <span>
            I am a positive, enthusiastic and competent Web Developer who, has
            built up a diverse range of skills, qualities and attributes that
            guarantee I will perform highly in this role.I assure you I will
            suitable person for your next project to improve quality and
            maintain optimized perform.Currently, I am developing my skills as a
            MERN Stack Developer in consistently to provide awesome services to
            my clients.Above all, I am passionate about coding field and
            technology
          </span>
        </div>
      </div>
      <div className="intro-right"></div>

      <img src={rabiul} style={{ width: "29rem", height: "29rem" }} alt="" />
    </div>
    </div>
  );
}
