import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation,Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import pic from "../../images/project1.png";
import pic1 from "../../images/project2.png";
import pic2 from "../../images/project3.png";
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();
  const details =()=>{
    navigate("detailproject")
  }
  return (
    <div className="project-name" id="project">
      <span>Recent Projects</span>
      <span>portfolio</span>
      <div className="project-section">
        <Swiper
        breakpoints={{
         
          
          768: {
            width: 768,
            slidesPerView: 1,
          },
          920: {
            width:928,
            slidesPerView: 2,
          },
          1280: {
            width: 1280,
            slidesPerView: 2,
          },
        }}
          spaceBetween={50}
         
          grabCursor={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="project-slider"
        >
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem", width: "32rem" }} alt="" />
            <h2>Apple Nationwide Distributor</h2>
            <p>This is a MERN Stack Project</p>
            <a href="https://meek-treacle-5beccb.netlify.app/">
              {" "}
              <button className="button bb">Live Site</button>
            </a>
            <button className="exp-b" onClick={details}>Explore More</button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} style={{ height: "18rem", width: "32rem" }} alt="" />
            <h2>Computer Parts Manufacturer</h2>
            <p>This is a MERN Stack Project</p>
            <a href="https://apple-nationwide-distributor.web.app/">
              {" "}
              <button className="button bb">Live Site</button>
            </a>
            <button className="exp-b" onClick={details}>Explore More</button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} style={{ height: "18rem", width: "32rem" }} alt="" />
            <h2>Exoplanet Photography</h2>
            <p>This is a MERN Stack Project</p>
            <a href="https://exoplanet-photography.web.app/">
              {" "}
              <button className="button bb">Live Site</button>
            </a>
            <button className="exp-b" onClick={details}>Explore More</button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem", width: "32rem" }} alt="" />
            <h2>Computer Parts Manufacturer</h2>
            <p>This is a MERN Stack Project</p>
            <a href="https://meek-treacle-5beccb.netlify.app/">
              {" "}
              <button className="button bb">Live Site</button>
            </a>
            <button className="exp-b">Explore More</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
