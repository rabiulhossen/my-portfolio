import React from "react";
import "./Works.css";
import { motion } from "framer-motion"
import atom from "../../images/atom.png";
import js from "../../images/javascript.png";
import html from "../../images/html-extension.png";
import css from "../../images/css.png";
import me from "../../images/programmer.png";

export default function Works() {
  return (
    <div className="works">
      <div className="left-ser">
        <span>My Splendid</span>
        <span>Element</span>
        <span>
          My Favourite element for build a website.<br />
        These tools help me to create a enterprise website from scratch.   <br />
         I try to utilize properly  these element for optimize performance.
        </span>

        <button className="button s-button">Hire me</button>
        <div className="l-blur"></div>
      </div>

      {/* right side  */}
      <motion.div className="w-works"
       initial={{ rotate: -180}}
       whileInView={{ rotate: 0 }}
       viewport={{ margin: "-80px" }}
       transition={{ duration: 2, repeat: Infinity, type: "spring" }}
      >
        <div className="main-circle">
          <div className="sec-circle">
            <img src={atom} alt="" />
          </div>

          <div className="sec-circle">
            <img src={js} alt="" />
          </div>

          <div className="sec-circle">
            <img src={html} alt="" style=
            {{width:"64px"}}/>
          </div>

          <div className="sec-circle">
            <img src={css} alt=""style=
            {{width:"64px"}} />
          </div>

          <div className="sec-circle">
            <img src={me} style=
            {{width:"64px"}} alt="" />
          </div>
        </div>
        <div className="back-circle blueC"></div>
        <div className="back-circle yellowC"></div>
        <div className="back-circle1 blueC1"></div>
        <div className="back-circle1 yellowC2"></div>
      </motion.div>
    </div>
  );
}
