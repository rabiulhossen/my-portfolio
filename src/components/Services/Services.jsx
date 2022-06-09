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
        As a Web Developer, I provide  quality work for my clients. I create website, customize website and implement, try to  add unique feature for website. I am work with HTML5, CSS3, TailwindCSS, JavaScript, ExpressJs, NodeJS, Mongodb, most popular framework ReactJS and many more.
        </span>

        <button className="button s-button">Hire Me</button>
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
