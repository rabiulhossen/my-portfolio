import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import pic from "../../images/abtract-background-3.jpg";

export default function Project() {
  return (
    <div className="project-name">
      <span>Recent Projects</span>
      <span>portfolio</span>
      <div className="project-section">
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          grabCursor={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="project-slider"
        >
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
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem", width: "32rem" }} alt="" />
            <h2>Computer Parts Manufacturer</h2>
            <p>This is a MERN Stack Project</p>
            <a href="https://apple-nationwide-distributor.web.app/">
              {" "}
              <button className="button bb">Live Site</button>
            </a>
            <button className="exp-b">Explore More</button>
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
