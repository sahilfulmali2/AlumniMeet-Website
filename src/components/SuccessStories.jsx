import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SucessStories.css";

const Stories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="story_container">
      <div className="inner_container">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="success_box">
              <div className="image_container">
                <img src={d.img} alt={d.name} className="profile-image" />
              </div>

              <div className="content">
                <p className="name">{d.name}</p>
                <p className="review">{d.story}</p>
                <button className="read-more-button">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: `Narendra Modi`,
    img: `https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg`,
    story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    name: `Narendra Modi`,
    img: `https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg`,
    story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    name: `Narendra Modi`,
    img: `https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg`,
    story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    name: `Narendra Modi`,
    img: `https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg`,
    story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    name: `Ellie Anderson`,
    img: `../assets/StoryImages/dhurvmc.jpeg`,
    story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
];

export default Stories;
