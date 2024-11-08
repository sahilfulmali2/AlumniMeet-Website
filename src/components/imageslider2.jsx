import React from "react";
import styles from "./imageslider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import slideImage1 from "../assets/Slider Images/1.jpg";
import slideImage2 from "../assets/Slider Images/2.jpg";
import slideImage3 from "../assets/Slider Images/3.jpg";
import slideImage4 from "../assets/Slider Images/4.jpg";
import slideImage5 from "../assets/Slider Images/5.jpg";
import slideImage6 from "../assets/Slider Images/6.jpg";
import slideImage7 from "../assets/Slider Images/7.jpg";
import slideImage8 from "../assets/Slider Images/8.jpg";
import slideImage9 from "../assets/Slider Images/9.jpg";

import "swiper/css";
import "swiper/css/bundle";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ImageSlider2 = () => {
  // const images = [
  //   slideImage1,
  //   slideImage2,
  //   slideImage3,
  //   slideImage4,
  //   slideImage5,
  //   slideImage6,
  //   slideImage7,
  //   slideImage8,
  //   slideImage9,
  // ];

  return (
    <div className={styles.img_slider2}>
      {/* <h1 className="heading">Gallery</h1> */}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} className={styles.images} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))} */}

        <SwiperSlide>
          <img src={slideImage1} className={styles.images} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage2} className={styles.images} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage3} className={styles.images} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage4} className={styles.images} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage5} className={styles.images} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage6} className={styles.images} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage7} className={styles.images} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider2;
