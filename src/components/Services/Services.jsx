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
          elit. Iusto, fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eos voluptatum ipsa culpa quia et?
        </span>

        <button className="button s-button">Download CV</button>
        <div className="blur"></div>
      </div>
      <div className="cards" style={{ left: "38rem",top:'0rem' }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="cards" style={{ top: "11rem", left: "-31rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="cards" style={{ left: "-11rem", top: "22rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
    </div>
  );
}
