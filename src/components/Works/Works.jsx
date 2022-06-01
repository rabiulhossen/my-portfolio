import React from "react";
import "./Works.css";
import github from "../../images/github.png";
import insta from "../../images/instagram.png";

export default function Works() {
  return (
    <div className="works">
      <div className="left-ser">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing <br />
          elit. Iusto, fuga! <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          dignissimos.
        </span>

        <button className="button s-button">Hire me</button>
        <div className="l-blur"></div>
      </div>

      {/* right side  */}
      <div className="w-works">
        <div className="main-circle">
          <div className="sec-circle">
            <img src={insta} alt="" />
          </div>

          <div className="sec-circle">
            <img src={github} alt="" />
          </div>

          <div className="sec-circle">
            <img src={insta} alt="" />
          </div>

          <div className="sec-circle">
            <img src={github} alt="" />
          </div>
        </div>
        <div className="back-circle"></div>
        <div className="back-circle"></div>
      </div>
    </div>
  );
}
