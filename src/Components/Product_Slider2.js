import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectCards,
  EffectCoverflow,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import ImageData from "./Pics";
import Blurb from "./ProductBlurb";
import CheckoutButton from "./CheckoutButton";


SwiperCore.use([Navigation, Pagination, Controller, EffectCoverflow]);

function Product_Slider2() {

    //  const [phoneSize, setPhoneSize] = useState(780 > window.innerHeight);

    //  const updateMedia = () => {
    //    setPhoneSize(780 > window.innerHeight);
    //  };

    //  useEffect(() => {
    //    // Applying on mount
    //    {
    //      phoneSize
    //        ? (document.body.style.overflow = "hidden")
    //        : (document.body.style.overflow = "visible");
    //    }
    //  }, []);

      const [thumbsSwiper, setThumbsSwiper] = useState(null);
      const [controlledSwiper, setControlledSwiper] = useState(null);


  const thumbsB = [];

  for (let i = 0; i < 12; i += 1) {
    thumbsB.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        {/* <img 
        src={`https://picsum.photos/id/${i}/163/100`} 
        className='hope2' 
        alt = {`Thumbnail ${i}`}/> */}
        <div className="hope2B">
          <CheckoutButton className="homeCartbuttonB" />
          {Blurb[i]}
        </div>
      </SwiperSlide>
    );
  }


    const slides3B = [];

    for (let i = 0; i < 12; i += 1) {
      slides3B.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img src={ImageData[i]} alt={`Thumbnail ${i}`} className="hopeB" />
        </SwiperSlide>
      );
    }



  

  return (
    <React.Fragment>
      <Swiper
        id="mainB"
        // thumbs={{swiper: thumbsSwiper}}
        // controller={{control: thumbsSwiper}}
        onSwiper={setControlledSwiper}
        controller={{control: thumbsSwiper}}
        tag="section"
        wrapperTag="ul"
        // navigation
        // pagination

        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={3}
        modules={[EffectCoverflow, Pagination]}
        wrapperTag="ul"
        // direction="vertical"
        // loop={true}

        height={1}
        spaceBetween={0}
       
        onInit={(swiper) => console.log(`Swiper initialized`, swiper)}
        onSlideChange={(swiper) =>
          console.log(`Slide index changed to:`, swiper.activeIndex)
        }
        onReachEnd={() => console.log("Swiper end reached")}
        onReachBeginning={() => console.log("Swiper start reached")}
      >
        {slides3B}
      </Swiper>

      <Swiper
        id="thumbsB"
        className="thumbsB"
        spaceBetween={5}
        slidesPerView={1}
        // direction="vertical"
        // loop={true}
        onSwiper={setThumbsSwiper}
        navigation
        // thumbs={{swiper: controlledSwiper}}
        controller={{control: controlledSwiper}}
      >
        {thumbsB}
      </Swiper>

      {/* <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides2}
      </Swiper> */}
    </React.Fragment>
  );
}

export default Product_Slider2;
