import React from "react";
import "./Works.css";
import { motion } from "framer-motion"
import github from "../../images/github.png";
import insta from "../../images/instagram.png";
import fb from "../../images/529-removebg-preview.png";

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
      <motion.div className="w-works"
       initial={{ rotate: 60 }}
       whileInView={{ rotate: 0 }}
       viewport={{ margin: "-40px" }}
       transition={{ duration: 4.5, type: "spring" }}
      >
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

          <div className="sec-circle">
            <img src={fb} style=
            {{width:"70px"}} alt="" />
          </div>
        </div>
        <div className="back-circle blueC"></div>
        <div className="back-circle yellowC"></div>
      </motion.div>
    </div>
  );
}
