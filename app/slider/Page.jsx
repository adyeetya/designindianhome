"use client";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page =({ images, initialSlide, onClose, onNextSlide, onPrevSlide }) =>{
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    initialSlide: initialSlide,
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
    onNextSlide(); // Call the onNextSlide callback
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    onPrevSlide(); // Call the onPrevSlide callback
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className='flex center bg-white' style={{ zIndex: "10", position: 'fixed', top: "70px", background: "white", height: '750px', width: "1600px" }}>
      <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', marginLeft: '30px', marginTop: "80px" }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                alt={image.filename}
                style={{ borderRadius: "10px", width: '900px', height: "500px" }}
              />
            </div>
          ))}
        </Slider>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border:black" onClick={handlePrev}>
          &lt;
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border:black" onClick={handleNext}>
          &gt;
        </button>
        <button className="absolute top-1 right-4 bg-gray-800 text-white p-2 rounded-full" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="p-8 flex flex-col items-center justify-center bg-gray-100 " style={{ height: "500px", marginTop: "80px" }}>
        <form
          className="w-full max-w-md py-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <h2 className="text-md font-bold py-2">
            Our designer will call you to help with your interior requirements.
          </h2>

          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full border rounded-md text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border rounded-md text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="mt-1 p-3 w-full border rounded-md text-sm"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="mt-1 p-3 w-full border rounded-md text-sm"
              placeholder="Enter your pincode"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 rounded-3xl hover:bg-green-500 w-full"
          >
            Book Design Session
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
