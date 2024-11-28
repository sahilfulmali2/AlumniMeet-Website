import React from "react";
import Donation from "./Donation-Section";
import Navbar from "./Navbar";
import Firstview from "./Firstview";
import Dangdu from "./Dangdu";
import ImageSlider from "./imageslider2";
import Stories from "./SuccessStories";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Dangdu></Dangdu>
      <Firstview/>
      <ImageSlider />
      <Stories />
      <Donation />
    </>
  );
};

export default Homepage;
