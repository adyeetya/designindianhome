'use client'

import React, { useState, useEffect } from 'react';
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
      <div className="wrapper">
        <div className="img-area ">
          <div className="single-img">
            <img src="images/bannernew.png" alt="" />
          </div>
          <div className="single-img">
            <video loop autoPlay muted controls={isPlaying} src="video/vid21.mp4" alt="" />
          </div>
          <div className="single-img">
            <video loop autoPlay controls={isPlaying} src="video/vid1.mp4" alt="" />
          </div>
          <div className="single-img">
            <img src="images/banner1.png" alt="" />
          </div>




        </div>
      </div>



      <div className="grids">
        <article className="main ">
          <h1>ABOUT US</h1>
          <p>
            We are one of the oldest business families in India with a family
             legacy of 112 years in business. Started for the noble cause of nation-building
              and self-sustenance in a pre-independent India, the forefathers believed ethical,
               honest and transparent business practices should form the foundation of the group.
<br/>
            Having ventured into jewellery retailing in 1993 in Thrissur, Kerala, India, 
            where we are headquartered, and as on June 30, 2020, we have 137 showrooms
             spread across India and GCC
          </p>
        </article>
        <section className="side">
          <>
            {/*
Slider Scaling Options, comment/uncomment the desired opening tag
Cover: Fill parent element
Fixed: Predefined width and height, 600x400 for demo
Propotional: Scales to match parent width; options for 4x3, 5x4, and 16x9, and 1.35x1
*/}
            <div className="slider slider--cover">
              {/* <div class="slider slider--fixed"> */}
              {/* <div class="slider slider--proportional slider--proportional-16x9"> */}
              <div className="slider__inner">
                <input
                  defaultChecked=""
                  type="radio"
                  name="slider__radiobox"
                  id="slider__radiobox--1"
                  className="slider_radiobox slider_radiobox--1"
                />
                <label
                  htmlFor="slider__radiobox--1"
                  className="slider_radiobox-label sliderradiobox-label--item slider_radiobox-label--item-1"
                />
                <label
                  htmlFor="slider__radiobox--4"
                  className="slider_radiobox-label sliderradiobox-label--prev slider_radiobox-label--prev-4"
                />
                <label
                  htmlFor="slider__radiobox--2"
                  className="slider_radiobox-label sliderradiobox-label--next slider_radiobox-label--next-2"
                />
                <input
                  type="radio"
                  name="slider__radiobox"
                  id="slider__radiobox--2"
                  className="slider_radiobox slider_radiobox--2"
                />
                <label
                  htmlFor="slider__radiobox--2"
                  className="slider_radiobox-label sliderradiobox-label--item slider_radiobox-label--item-2"
                />
                <label
                  htmlFor="slider__radiobox--1"
                  className="slider_radiobox-label sliderradiobox-label--prev slider_radiobox-label--prev-1"
                />
                <label
                  htmlFor="slider__radiobox--3"
                  className="slider_radiobox-label sliderradiobox-label--next slider_radiobox-label--next-3"
                />
                <input
                  type="radio"
                  name="slider__radiobox"
                  id="slider__radiobox--3"
                  className="slider_radiobox slider_radiobox--3"
                />
                <label
                  htmlFor="slider__radiobox--3"
                  className="slider_radiobox-label sliderradiobox-label--item slider_radiobox-label--item-3"
                />
                <label
                  htmlFor="slider__radiobox--2"
                  className="slider_radiobox-label sliderradiobox-label--prev slider_radiobox-label--prev-2"
                />
                <label
                  htmlFor="slider__radiobox--4"
                  className="slider_radiobox-label sliderradiobox-label--next slider_radiobox-label--next-4"
                />
                <input
                  type="radio"
                  name="slider__radiobox"
                  id="slider__radiobox--4"
                  className="slider_radiobox slider_radiobox--4"
                />
                <label
                  htmlFor="slider__radiobox--4"
                  className="slider_radiobox-label sliderradiobox-label--item slider_radiobox-label--item-4"
                />
                <label
                  htmlFor="slider__radiobox--3"
                  className="slider_radiobox-label sliderradiobox-label--prev slider_radiobox-label--prev-3"
                />
                <label
                  htmlFor="slider__radiobox--1"
                  className="slider_radiobox-label sliderradiobox-label--next slider_radiobox-label--next-1"
                />
                <div className="slider__slides">
                  <div className="slider_slide slider_slide--1">
                    <img
                      alt="Placeholder 940x470"
                      src="images/74.png"
                    />
                  </div>
                  <div className="slider_slide slider_slide--2">
                    <img
                      alt="Placeholder 1200x600"
                      src="images/52.png"
                    />
                  </div>
                  <div className="slider_slide slider_slide--3">
                    <img
                      alt="Placeholder 300x150"
                      src="images/50.png"
                    />
                  </div>
                  <div className="slider_slide slider_slide--4">
                    <img
                      alt="Placeholder 800x400"
                      src="images/12.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>

        </section>
      </div>




























    </>

  )
}

export default Display