import React from "react";
import "./DetailProject.css";
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'
import p4 from '../../images/p4.png'
import p5 from '../../images/p5.png'
import p6 from '../../images/p6.png'
import p7 from '../../images/p7.png'
import p8 from '../../images/p8.png'
import p9 from '../../images/p9.png'

export default function DetailProject() {
  return (
    <div>
  
      <div className="project-detail">
        <div className="project">
          <h2>1. TechEcho Parts Manufacturer</h2>
          
          <li>This is a MERN Stack Project</li>
          <li>User and Admin role created</li>
          <li>creative and attractive dashboard for both</li>
        </div>
        <div className="images">
          <img src={p1}style={{width:"27rem",height:'25rem'}} alt="" />
          <img src={p2} style={{width:"27rem",height:'25rem'}}alt="" />
          <img src={p3} style={{width:"27rem",height:'25rem'}} alt="" />
        </div>
      </div>
      <div className="project-detail">
        <div className="project">
          <h2>2. Apple Nationwide Distributor </h2>
          <li>This is a MERN Stack Project</li>
          <li>User can add,manage and delete data</li>
          <li>creative and animated design</li>
        </div>
        <div className="images">
          <img src={p4}style={{width:"27rem",height:'25rem'}} alt="" />
          <img src={p5} style={{width:"27rem",height:'25rem'}}alt="" />
          <img src={p6} style={{width:"27rem",height:'25rem'}} alt="" />
        </div>
      </div>
      <div className="project-detail">
        <div className="project">
          <h2>3. Exoplanet Photography</h2>
          <li>This is a Atrophography website</li>
          <li>User can rent telescope  and take home for photography</li>
          <li>creative and animated design</li>
        </div>
        <div className="images">
          <img src={p7}style={{width:"27rem",height:'25rem'}} alt="" />
          <img src={p8} style={{width:"27rem",height:'25rem'}}alt="" />
          <img src={p9} style={{width:"27rem",height:'25rem'}} alt="" />
        </div>
      </div>
    </div>
  );
}
