'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Button from '../Button';
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
            <Image src="/images/bannernew.png" alt="" width={0} height={0} />
          </div>
          <div className="single-img">
            <video loop autoPlay muted controls={isPlaying} src="video/vid21.mp4" alt="" width={0} height={0} />
          </div>
          <div className="single-img">
            <video loop autoPlay controls={isPlaying} src="video/vid1.mp4" alt="" width={0} height={0} />
          </div>
          <div className="single-img">
            <Image src="/images/banner1.png" alt="" width={0} height={0} />
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
            <br />
            Having ventured into jewellery retailing in 1993 in Thrissur, Kerala, India,
            where we are headquartered, and as on June 30, 2020, we have 137 showrooms
            spread across India and GCC
          </p>
        </article>
        <section className="side">

          <div className="slider slider--cover">
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
                    alt="" width={0} height={0}
                  />
                </div>
                <div className="slider__slide slider__slide--2">
                  <Image
                    alt="Placeholder 1200x600"
                    src="/images/50.png"
                     width={0} height={0}
                  />
                </div>
                <div className="slider__slide slider__slide--3">
                  <Image
                    alt="Placeholder 300x150 "
                    src="/images/12.png"
                    width={0} height={0}
                  />
                </div>
                <div className="slider__slide slider__slide--4">
                  <Image
                    alt="Placeholder 800x400"
                    src="/images/74.png"
                    width={0} height={0}
                  />
                </div>
              </div>
            </div>
          </div>



        </section>
      </div>






      <div className="section1">
        <div className="title_header">
          <h1>Connect With Us</h1>
          <span className="bar" />

        </div><br />
        <section>
          <div className="card">




            <div className="grids">
              <article className="main ">
                <h2>Connect on</h2>
                <h1>Whatsapp</h1>

              </article>
              <section className="side">
                <Image
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9fa2f775//images/home/whatsapp-icon.svg"
                  width={0} height={0}
                />
              </section>
            </div>
          </div>




          <div className="card">
            <div className="grids">
              <article className="main ">
                <h2>Book An</h2>
                <h1>Appointment</h1>

              </article>
              <section className="side">
                <Image
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwac5fb555//images/home/marker-icon.svg"
                  width={0} height={0}
                />
              </section>
            </div>
          </div>



          <div className="card">
            <div className="grids">
              <article className="main ">
                <h2>Schedule A</h2>
                <h1>Video Call</h1>

              </article>
              <section className="side">
                <Image
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw153e7692//images/home/video-icon.svg"
                  width={0} height={0}
                />
              </section>
            </div>
          </div>



        </section>
      </div>


    </>


  )
}

export default Display