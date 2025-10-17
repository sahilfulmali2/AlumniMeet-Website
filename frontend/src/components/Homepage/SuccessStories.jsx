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
       <h1>Success Stories</h1>
      <div className="inner_container">
       
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="success_box">
              <div className="image_container">
                <img src={d.img} alt={d.name} className="profile-image" />
              </div>

              <div className="content">
                <p className="name">{d.name}</p>
                <p className="review">{d.post}</p>
                <p className="review">{d.company}</p>
                {/* <button className="read-more-button">Read More</button> */}
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
    name: `Dr. Ravindra T. Borkar`,
    img: `/alumniphotos/ravindraborkar.webp`,
    post: `MGAHV Central University Wardha `,
    company: ` `,
  },
  {
    name: `Shri Abhijit Deshpande`,
    img: `/alumniphotos/Abhijit_Deshpande.webp`,
    post: `General Manager(Projects)`,
    company: ` Govt. of Maharashtra M/S B.G.Shirke Const.Tech.Pvt.Ltd.`,
  },
  {
    name: `Shri Parag Gulhane`,
    img: `/alumniphotos/Parag _Gulhane.webp`,
    post: `Director`,
    company: `MakerInMe Tehnologies Pvt Ltd`,
  },
  {
    name: `Shri Nitin Nandanwar`,
    img: `/alumniphotos/Nitin_Nandanwar.webp`,
    post: `Asst General Manager`,
    company: `Tata Consulting Engineer`,
    
  },
  {
    name: `Shri Chirag Sonchal`,
    img: `/alumniphotos/chirags.webp`,
    post: `Senior Manager`,
    company: `John Deere India Pvt. Ltd`,
  },
  {
    name: `Shri Prasanna Shanbhag`,
    img: `/alumniphotos/pshanbag.webp`,
    post: `Sr Software Engineering Manager`,
    company: `Medtronic, Los Angeles`,
  },
];

export default Stories;
