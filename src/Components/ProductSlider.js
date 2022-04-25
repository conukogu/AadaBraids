//@media (min-width: 650px){

import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectCards,
  EffectCoverflow,
  Thumbs,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import ImageData from "./Pics";
import Blurb from "./ProductBlurb";
import CheckoutButton from "./CheckoutButton";




import "./main.css";

import Axios from "axios";

import Products from './Product_Slider'
import Product_Slider2 from './Product_Slider2'


SwiperCore.use([Navigation, Pagination, Controller, EffectCoverflow, Thumbs]);

function ProductSlider() {

   
  const [phoneSize, setPhoneSize] = useState(650 < window.innerWidth);

  const updateMedia = () => {
    setPhoneSize(650 < window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{phoneSize ? <Product_Slider2 /> : <Products />}</div>;
}

export default ProductSlider