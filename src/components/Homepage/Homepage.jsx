import React from "react";
import Donation from "./Donation-Section";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Dangdu from "./Dangdu";
import ImageSlider from "./imageslider2";
import Stories from "./SuccessStories";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <Dangdu></Dangdu>
      <ImageSlider />
      <Stories />
      <Donation />
      <Footer />
    </>
  );
};

export default Homepage;
