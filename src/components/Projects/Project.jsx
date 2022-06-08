import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic from "../../images/abtract-background-3.jpg";

export default function Project() {
  return (
    <div className="project-name">
      <span>Recent Projects</span>
      <span>portfolio</span>
      <div className="project-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          grabCursor={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="project-slider"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem",width:'500px' }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem",width:'500px' }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic} style={{ height: "18rem",width:'500px' }} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
