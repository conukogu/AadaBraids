import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Controller, Thumbs, Autoplay} from 'swiper'
import  'swiper/css/bundle';
import './styles.css';

SwiperCore.use([Navigation, Pagination, Controller,  Thumbs]);


function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  
  const slides =[];

  for (let i = 0; i < 5; i += 1){
    slides.push(
      <SwiperSlide  key={`slide-${i}`} tag= "li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt = {`Slide ${i}`}/>
      </SwiperSlide>
    );
  }

  const thumbs =[];

  for (let i = 0; i < 5; i += 1){
    thumbs.push(
      <SwiperSlide  key={`slide-${i}`} tag= "li">
        <img src={`https://picsum.photos/id/${i}/163/100`} alt = {`Thumbnail ${i}`}/>
      </SwiperSlide>
    );
  }

  const slides2 =[];
  
  for (let i = 5; i < 10; i += 1){
    slides2.push(
      <SwiperSlide  key={`slide-${i}`} tag= "li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt = {`Slide ${i}`}/>
      </SwiperSlide>
    );
  }

  const slides3 =[]
    
  for (let i = 0; i < 5; i += 1){
    slides3.push(
      <SwiperSlide  key={`slide-${i}`} tag= "li">
        <img src={`https://source.unsplash.com/random/800x800/?img=1`} alt = {`Thumbnail ${i}`} 
        autoHeight={false}
        className='hope'
       />
      </SwiperSlide>
    );
  }
  


  return (
    <React.Fragment>
      <Swiper  
      id= "main" 
      // thumbs={{swiper: thumbsSwiper}}
      // controller = {{control: controlledSwiper}}
      tag= "section" 
      wrapperTag='ul' 
      navigation 
      pagination
      height={1} 
      spaceBetween={0}
      slidesPerView='auto'
      autoHeight={false}
      onInit={(swiper) => console.log(`Swiper initialized`, swiper)}
      onSlideChange={(swiper) => console.log(`Slide index changed to:`, swiper.activeIndex)}
      onReachEnd={()=> console.log('Swiper end reached')
      }
      onReachBeginning={()=> console.log('Swiper start reached')}>
        {slides3}
      </Swiper>

      {/* <Swiper 
      id='thumbs'
      spaceBetween={5}
      slidesPerView={3} 
      onSwiper={setThumbsSwiper}>
        {thumbs}
      </Swiper> */}

      {/* <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides2}
      </Swiper> */}
    </React.Fragment>
  );
}

export default App;