'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 264 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const sliderImageUrl = [
  //First image url
  {
    url:
      "https://source.unsplash.com/black-flat-screen-tv-mounted-on-white-wall-3hEGHI4b4gg"
  },
  {
    url:
    "https://source.unsplash.com/white-wooden-kitchen-island-and-cupboard-cabinets-near-glass-panel-door-AQl-J19ocWE"
  },
  //Second image url
  {
    url:
      "https://source.unsplash.com/white-and-black-kitchen-cabinet-jylx7bVZMIk"
  },
  //Third image url
  {
    url:
    "https://source.unsplash.com/black-round-bowl-on-brown-wooden-seat-NWG-vYPZDoM"
  },

  //Fourth image url

  {
    url:
      "https://source.unsplash.com/two-brown-wooden-bar-stools-cc0Gg3BegjE"
  },

{
  url:
    "https://source.unsplash.com/brown-and-white-wooden-kitchen-cabinet-DQpUeNzRj6s"
  }
];



const Display = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    video.addEventListener('load', () => {
      setIsPlaying(true);
    });
  }, []);



  return (
    <>
      

      <div className="main">
      <img src="/images/left.gif" width={50} height={50} />
  
 <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
   <defs>
     <path
       id="circle"
       d="M 100, 100
         m -75, 0
         a 75, 75 0 1, 0 150, 0
         a 75, 75 0 1, 0 -150, 0
         "
     ></path>
   </defs>
   <text width={400}>
     <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
     Get Your Home Interior Quote    </textPath>
   </text>
 </svg>
</div>
   







<div className="wrapperlatesti">
        <h1 >Exquisite Designs</h1>
        <h3> Exquisite Makeovers</h3>
      </div>


      
      <div className="wrapper">
        <div className="img-areai ">
          <div className="single-imgi">
          <Image src="/images/bannernew.png" alt="" width={600} height={600} />
          </div>
          <div className="single-imgi">
            <video loop autoPlay muted controls={isPlaying} src="video/vid21.mp4" alt=""  width={600} height={600} />
          </div>
          <div className="single-imgi">
            <video loop autoPlay controls={isPlaying} src="video/vid1.mp4" alt=""  width={600} height={600} />
          </div>
          <div className="single-imgi">
          <Image src="/images/banner1.png" alt="" width={600} height={600} />
          </div>




        </div>
      </div>


      <section class="bordered bordersec">
 </section>
      <div className="gridz">
        <article className="mainz">
          <h1>ABOUT US</h1>
          <p>
            We are one of the oldest business families in India with a family
            legacy of 112 years in business. Started for the noble cause of nation-building
            and self-sustenance in a pre-independent India, the forefathers believed ethical,
            honest and transparent business practices should form the foundation of the group.
            <br />
            Having ventured into jewellery retailing in 1993 in Thrissur, Kerala, India,
            where we are headquartered, and as on June 30, 2020, we have 137 showrooms
            spread across India and GCC
          </p>
        </article>
        <section className="sidezi">

          <div className="sliderz slider--cover">
            <div className="slider__inner">
              <input
                defaultChecked=""
                type="radio"
                name="slider__radiobox"
                id="slider__radiobox--1"
                className="slider__radiobox slider__radiobox--1"
              />
              <label
                htmlFor="slider__radiobox--1"
                className="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item-1"
              />
              <label
                htmlFor="slider__radiobox--4"
                className="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev-4"
              />
              <label
                htmlFor="slider__radiobox--2"
                className="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next-2"
              />
              <input
                type="radio"
                name="slider__radiobox"
                id="slider__radiobox--2"
                className="slider__radiobox slider__radiobox--2"
              />
              <label
                htmlFor="slider__radiobox--2"
                className="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item-2"
              />
              <label
                htmlFor="slider__radiobox--1"
                className="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev-1"
              />
              <label
                htmlFor="slider__radiobox--3"
                className="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next-3"
              />
              <input
                type="radio"
                name="slider__radiobox"
                id="slider__radiobox--3"
                className="slider__radiobox slider__radiobox--3"
              />
              <label
                htmlFor="slider__radiobox--3"
                className="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item-3"
              />
              <label
                htmlFor="slider__radiobox--2"
                className="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev-2"
              />
              <label
                htmlFor="slider__radiobox--4"
                className="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next-4"
              />
              <input
                type="radio"
                name="slider__radiobox"
                id="slider__radiobox--4"
                className="slider__radiobox slider__radiobox--4"
              />
              <label
                htmlFor="slider__radiobox--4"
                className="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item-4"
              />
              <label
                htmlFor="slider__radiobox--3"
                className="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev-3"
              />
              <label
                htmlFor="slider__radiobox--1"
                className="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next-1"
              />
              <div className="slider__slides">
                <div className="slider__slide slider__slide--1">
                <Image
                  

                    src="/images/52.png"
                    alt="" width={300} height={300}
                   
                  />
                </div>
                <div className="slider__slide slider__slide--2">
                <Image
                 
                    alt="Placeholder 1200x600"
                    src="/images/74.png"
                     width={300} height={300}
                  />
                </div>
                <div className="slider__slide slider__slide--3">
                <Image
                 
                    alt="Placeholder 300x150 "
                    src="/images/12.png"
                    width={300} height={300}
                    
                  />
                </div>
                <div className="slider__slide slider__slide--4">
                <Image

                    alt="Placeholder 800x400"
                    src="/images/50.png"
                    width={300} height={300}
                   
                  />
                </div>
              </div>
            </div>
          </div>



        </section>
      </div>






     















{/* 
      <div className="main">
<img src="/images/left.gif" width={50} height={50} id='sm'/>
  
 <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
   <defs>
     <path
       id="circle"
       d="M 100, 100
         m -75, 0
         a 75, 75 0 1, 0 150, 0
         a 75, 75 0 1, 0 -150, 0
         "
     ></path>
   </defs>
   <text width={400}>
     <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
     The Best Home Interior Brand of India -
     </textPath>
   </text>
 </svg>
</div>
      <div className="wrapperlatest" id='rev'>
        <h1>Best Trending Kitchens</h1>
        
      </div>






      <ReactCardSlider slides={slides} />  <br/>
    
    <div className="wrapperlatest" >
        <h1>Best Trending Kitchens</h1>
        
      </div>



    <ReactCardSlider slides={slides} />  <br/>
    <div className="wrapperlatest" >
        <h1>Best Trending Bathrooms</h1>
        
      </div>



    <ReactCardSlider slides={slides} />  <br/>
    <div className="wrapperlatest" >
        <h1>Best Trending Wardrobes</h1>
        
      </div>



    <ReactCardSlider slides={slides} />
    <br/>
     */}
























    </>


  )
}

export default Display