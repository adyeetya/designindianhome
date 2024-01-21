"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Share2 } from "lucide-react";
const Page = ({ images, initialSlide, onClose, onNextSlide, onPrevSlide }) => {
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    onPrevSlide(); // Call the onPrevSlide callback
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  const handleShare = (e) => {
    console.log("Share");
  };

  //  style={{
  //   zIndex: '10',
  //   position: 'fixed',
  //   top: '70px',
  //   background: 'white',
  //   width: '100%',
  //   height: '100%',
  // }}
  //  style={{
  //         position: 'relative',
  //         width: '900px',
  //         height: '500px',
  //         overflow: 'hidden',
  //         marginLeft: '30px',
  //       }}
  //  style={{
  //                 borderRadius: '10px',
  //                 width: '900px',
  //                 height: '500px',
  //               }}
  return (
    <div className="fixed  inset-0 items-center justify-center z-50 flex  bg-black bg-opacity-75">
      <div className="flex items-center justify-center flex-col md:h-[70vh] h-screen max-w-screen-xl overflow-hidden bg-white rounded-lg shadow-lg md:flex-row my-32 sm:my-4">
        {/* Image Slider */}
        <div className="relative w-full md:w-[60%] lg:w-[700px]  md:h-[70vh] md:flex-shrink-0 mt-24 sm:mt-0">
          <Slider {...sliderSettings} ref={sliderRef}>
            {images.map((image) => (
              <div
                key={image.id}
                className="h-[30vh] md:h-[70vh]  md:rounded-l-lg overflow-hidden"
              >
                <img
                  src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                  alt={image.filename}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border-black"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border-black"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>

        {/* Form Section */}
        <div className="p-2 mb-16 sm:mb-0 sm:pt-0 pt-24 flex flex-col items-center justify-center bg-white md:w-[400px] lg:w-[500px] md:rounded-r-lg md:pt-12 lg:pt-0 relative md:flex-shrink-0 overflow-auto">
          <form
            className="w-full max-w-md p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md"
            method="post"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl text-center font-bold pt-2 text-white">
              Our designer will call you to help with your interior
              requirements.
            </h2>
            <div className="flex justify-between mb-2">
              <h2 className="text-md py-2 italic  text-center text-white">
                Book a Visit Today
              </h2>
              <button onClick={handleShare} className="p-0 m-0">
                <div className="rounded-full bg-white w-fit p-2 border-2 border-gray-300 cursor-pointer">
                  <Share2 className="text-gray-600" />
                </div>
              </button>
            </div>
            <div className="flex justify-evenly my-4">
              <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/customisable-designs.avif"
                  alt=""
                  className="w-12"
                />
                <p className="text-[8px] text-center text-gray-300">
                  Customisable Designs
                </p>
              </div>
              <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/easy-emis.avif"
                  alt=""
                  className="w-12"
                />
                <p className="text-[8px] text-center text-gray-300">
                  Easy <br /> Emis
                </p>
              </div>
              <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/flat-10-year-warranty.avif"
                  alt=""
                  className="w-12"
                />
                <p className="text-[8px] text-center text-gray-300">
                  10 year <br /> warranty
                </p>
              </div>
              <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/45-rating.avif"
                  alt=""
                  className="w-12"
                />
                <p className="text-[8px] text-center text-gray-300">
                  4.5 <br /> rating
                </p>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                placeholder="Enter your pincode"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 hover:shadow-lg text-white py-3 px-6 rounded-md  w-full"
            >
              Book Design Session
            </button>
          </form>

          <button
            className="absolute top-2 right-4 bg-gray-800 text-white p-2 rounded-full px-4"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
