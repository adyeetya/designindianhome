'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Button from '../Button';

import ReactCardSlider from 'react-card-slider-component';
const Display = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    video.addEventListener('load', () => {
      setIsPlaying(true);
    });
  }, []);

  const slides = [
    {image:"https://source.unsplash.com/brown-wooden-seat-beside-white-wooden-table-TRCJ-87Yoh0",title:"View More"},
    {image:"https://source.unsplash.com/white-wooden-kitchen-island-and-cupboard-cabinets-near-glass-panel-door-AQl-J19ocWE",title:"View More",},
    {image:"https://source.unsplash.com/white-over-the-range-oven-GliaHAJ3_5A",title:"View More"},
    {image:"https://source.unsplash.com/white-and-black-kitchen-counter-oCw5_evbWyI",title:"View More"},
    {image:"https://source.unsplash.com/white-wooden-kitchen-cabinet-with-stainless-steel-faucet-ik9WP2V8Vas",title:"View More"},
    {image:"https://source.unsplash.com/gray-steel-3-door-refrigerator-near-modular-kitchen-MP0bgaS_d1c",title:"View More"},
    {image:"https://source.unsplash.com/white-and-brown-kitchen-cabinet--aDGbdTsBZg",title:"View More"},
    {image:"https://source.unsplash.com/white-wooden-kitchen-cupboards-and-gray-gas-stove-dn5VihVxloc",title:"View More"},
    {image:"https://source.unsplash.com/white-wooden-kitchen-cabinet-with-black-pendant-lamp-KiUg-4xmTwo",title:"View More"},
    {image:"https://source.unsplash.com/rectangular-white-wooden-table-I_QC1JICzA0",title:"View More"},
    {image:"https://source.unsplash.com/kitchen-island-near-gas-range-beside-base-cabinets-sZ5CteK2r6E",title:"View More"},
    {image:"https://source.unsplash.com/a-kitchen-with-a-center-island-with-stools-_IAZoJ6X-1A",title:"View More"},
    {image:"https://source.unsplash.com/kitchen-house-area-z3QZ6gjGRt4",title:"View More"},
]

  return (
    <>
      
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



      <Image src="/images/bar.png" height={200} width={1500} />
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
    
    </>


  )
}

export default Display