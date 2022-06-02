import React from "react";
import { Pagination } from "swiper";
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination'
import  'swiper/css'
import pic from "../../images/abtract-background-3.jpg";

export default function Testimonial() {
  const clients = [
    {
      name: "mahatir mohammed",
      img:{pic},
      review: "awesome",
    },
    {
      name: "mahatir mohammed",
      img:{pic},
      review: "awesome",
    },
    {
      name: "mahatir mohammed",
      img:{pic},
      review: "awesome",
    }
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client says</span>
        <span>Exceptional Work</span>
        <span>From me</span>

        <div className="blur t-blur" style={{ backgroundColor: "" }}></div>
        <div className="blur t-blur" style={{ backgroundColor: "" }}></div>

        {/* slider
         */}
      </div>
      <Swiper
      modules={[Pagination]}
      sliderPerview={1}
      pagination={{clickable:true}}
      
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='testimonial'>
                <h1>{client.name}</h1>
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
             
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
