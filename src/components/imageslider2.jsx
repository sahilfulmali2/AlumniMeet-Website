import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { EffectCoverflow, Pagination, Navigation ,Autoplay  } from "swiper/modules";
import slide_image_1 from "../assets/SliderImages/1.jpg";
import slide_image_2 from "../assets/SliderImages/2.jpg";
import slide_image_3 from "../assets/SliderImages/3.jpg";
import slide_image_4 from "../assets/SliderImages/4.jpg";
import slide_image_5 from "../assets/SliderImages/5.jpg";
import slide_image_6 from "../assets/SliderImages/6.jpg";
import slide_image_7 from "../assets/SliderImages/7.jpg";


const slideImages = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_6,
  slide_image_7,
];

function ImageSlider() {
  return (
    <div className="main_container">
      <h1 className="heading">College Gallery</h1>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false, 
          }}
          modules={[EffectCoverflow, Pagination, Navigation ,Autoplay]}
          className="swiper_container"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`slide_image_${index + 1}`} />
            </SwiperSlide>
          ))}

          
        </Swiper>
        <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
      </div>
    </div>
  );
}

export default ImageSlider;
