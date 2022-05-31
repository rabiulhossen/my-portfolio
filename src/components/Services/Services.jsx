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
        <div className="blur" style={{ backgroundColor: "" }}></div>
      </div>
      <div className="card" style={{ left: "17rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="card" style={{ top: "15rem", left: "-9rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="card" style={{ left: "-5rem", top: "29rem" }}>
        <Card pic={insta} heading={"Design"} detail={"Figma,Photoshop"} />
      </div>
    </div>
  );
}
