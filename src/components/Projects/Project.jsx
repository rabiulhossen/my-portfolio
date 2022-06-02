import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import pic from "../../images/abtract-background-3.jpg";

export default function Project() {
  return (
    <div className="project-name">
      <span>Recent Projects</span>
      <span>portfolio</span>
      <div className="project-section">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="project-slider"
        >
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem" }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem" }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem" }} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
