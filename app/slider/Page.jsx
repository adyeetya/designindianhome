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
    e.preventDefault();

    if (currentIndex >= 0 && currentIndex < images.length) {
      const currentImage = images[currentIndex];

      // Encode the filename before constructing the URL
      const encodedFilename = encodeURIComponent(currentImage.filename);

      const imageUrl = `https://api.designindianwardrobe.com/uploads/${encodedFilename}`;

      // Construct the WhatsApp share link
      const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
        imageUrl
      )}`;

      // Open WhatsApp with the pre-filled message
      window.open(whatsappLink, "_blank");
    } else {
      console.error("Invalid currentIndex:", currentIndex);
    }
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
    <div className="fixed  inset-0 items-center justify-center z-50 flex  bg-black bg-opacity-75 ">
      <div className="relative flex items-center justify-center flex-col md:h-[80vh] h-screen max-w-screen-xl  bg-white rounded-lg shadow-lg md:flex-row my-32 sm:my-4 overflow-hidden">
        {/* Image Slider */}
        <div className="relative w-full md:w-[60%] lg:w-[700px]  md:h-[80vh] md:flex-shrink-0 mt-24 sm:mt-0">
          <Slider {...sliderSettings} ref={sliderRef}>
            {images.map((image) => (
              <div
                key={image.id}
                className="h-[30vh] md:h-[80vh]  md:rounded-l-lg overflow-hidden"
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
          <button
            className="absolute top-2 right-4 bg-gray-800 text-white text-2xl hover:text-red-400 p-2 rounded-full px-4"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Form Section */}
        <div className="md:px-12 p-2 mb-24 sm:mb-0   flex flex-col  justify-center bg-white md:w-[400px] lg:w-[500px] md:rounded-r-lg max-h-[90%] overflow-y-auto">
          <form
            className="w-full max-w-md p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md overflow-y-auto"
            method="post"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl text-center font-bold pt-10 text-white">
              Our designer will call you to help with your interior
              requirements.
            </h2>
            <div className="flex items-center my-2">
              <h2 className="ml-4 flex-1 text-md py-2 italic text-center text-green-400">
                Book a Visit Today
              </h2>
              <button onClick={handleShare} className="p-0 m-0">
                <div className="rounded-full bg-white hover:bg-gray-400 w-fit p-2 border-2 border-gray-300 cursor-pointer">
                  <Share2 className="text-gray-600" />
                </div>
              </button>
            </div>
            <div className="flex justify-evenly my-4">
              <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/customisable-designs.avif"
                  alt=""
                  className="w-12 self-center"
                />
                <p className="text-[8px] text-center text-gray-300">
                  Customisable Designs
                </p>
              </div>
              <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/easy-emis.avif"
                  alt=""
                  className="w-12 self-center"
                />
                <p className="text-[8px] text-center text-gray-300">
                  Easy <br /> Emis
                </p>
              </div>
              <div className="flex justify-content-center flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/flat-10-year-warranty.avif"
                  alt=""
                  className="w-12 self-center"
                />
                <p className="text-[8px] text-center text-gray-300">
                  10 year <br /> warranty
                </p>
              </div>
              <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                <img
                  src="/images/gallery/45-rating.avif"
                  alt=""
                  className="w-12 self-center"
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
              <select
                id="Interest"
                name="Interest"
                className="mt-1 p-2 w-full border border-gray-300 text-sm focus:outline-none rounded-md"
                required
              >
                <option className="text-gray-400" value="" disabled selected>
                  Interested in
                </option>
                <option value="Kitchen">Kitchen</option>
                <option value="Interior">Interior</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 hover:shadow-lg text-white py-3 px-6 rounded-md  w-full"
            >
              Book Design Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
