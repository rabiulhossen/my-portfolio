import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import server from "../../images/server.png";
import design from "../../images/design.png";
import res from "../../images/web-browser.png";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="left-service">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
        As a Web Developer, I provide  quality work for my clients. I create website, customize website and implement, try to  add unique feature for website. I am work with HTML5, CSS3, TailwindCSS, JavaScript, ExpressJs, NodeJS, Mongodb, most popular framework ReactJS and many more.
        </span>

       <a href="www.linkedin.com/in/rabiulhossen"> <button className="button s-button">Hire Me</button> </a>
        <div className="blur"></div>
      </div>
      <div className="cardgroup">
      <div className="cards" style={{ left: "68rem",top:'43rem' }}>
        <Card pic={design} heading={"UI Design"} detail={"Figma,Photoshop"} />
      </div>
      <div className="cards" style={{ top: "54rem", left: "49rem" }}>
        <Card pic={server} heading={"Server Side"} detail={"ExpressJs,Nodejs,Mongodb"} />
      </div>
      <div className="cards" style={{ left: "73rem", top: "66rem" }}>
        <Card pic={res} heading={"Responsive Design"} detail={"ReactJs,CSS3,TailwindCss,Bootstrap"} />
      </div>
      </div>
    </div>
  );
}
