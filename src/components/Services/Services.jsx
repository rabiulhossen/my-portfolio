import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import insta from "../../images/instagram.png";

export default function Services() {
  return (
    <div className="services">
      <div className="left-ser">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing <br />
          elit. Iusto, fuga!
        </span>

        <button className="button s-button">Download CV</button>
        <div className="blur"></div>
      </div>
      <div className="card" style={{ left: "21rem",top:'-1rem' }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="card" style={{ top: "11rem", left: "-11rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="card" style={{ left: "-11rem", top: "22rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
    </div>
  );
}
