import React from 'react'
import ReactDOM from 'react-dom/client'
import Donation from './components/Donation-Section';
import ImageSlider from './components/imageslider2';
import Stories from './components/SuccessStories';
import Footer from './components/Footer';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageSlider/>
    <Stories/>
    <Donation/>
    <Footer/>
  </React.StrictMode>,
);