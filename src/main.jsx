import React from 'react'
import ReactDOM from 'react-dom/client'
import Donation from './components/Donation-Section';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dangdu from './components/Dangdu';
import ImageSlider from './components/imageslider2';
import Stories from './components/SuccessStories';
import Footer from './components/Footer';


import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero></Hero>
    <Dangdu></Dangdu>
    <ImageSlider/>
    <Stories/>
    <Donation/>
    <Footer/>
  </React.StrictMode>,
);