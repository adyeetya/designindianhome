'use client'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Share2 } from 'lucide-react'
const Page = ({ images, initialSlide, onClose, onNextSlide, onPrevSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide)
  const sliderRef = useRef(null)

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    initialSlide: initialSlide,
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
    onNextSlide() // Call the onNextSlide callback
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
    onPrevSlide() // Call the onPrevSlide callback
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }
  const handleShare = (e) => {
    console.log('Share')
  }

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
    <div className="flex flex-col md:flex-row justify-center items-center z-10 fixed sm:top-[70px] top-[110px] bg-white w-full sm:h-full h-[80%] overflow-auto shadow-lg">
      <div className="shadow-lg relative w-full sm:w-[550px] md:w-[700px] sm:h-[500px] h-[300px] lg:h-[550px] sm:ml-[30px] md:rounded-l-lg">
        <Slider {...sliderSettings} ref={sliderRef}>
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                alt={image.filename}
                className="md:rounded-l-lg w-full sm:w-[500px] md:w-[900px] h-[300px] sm:h-[500px] lg:h-[550px] shadow-lg"
              />
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border:black"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border:black"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      <div className="overflow-auto p-8 md:relative flex flex-col items-center justify-center bg-white sm:h-[500px] lg:h-[550px] h-[700px] sm:pt-12 pt-32 sm:mr-[30px] md:rounded-r-lg shadow-lg sm:mx-0 mx-auto">
        <form
          className="w-full max-w-md py-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl text-center font-bold pt-2">
            Our designer will call you to help with your interior requirements.
          </h2>
          <div className="flex justify-between mb-2">
            <h2 className="text-md py-2 italic text-green-500 text-center">
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
              <p className="text-[8px] text-center text-gray-600">
                Customisable Designs
              </p>
            </div>
            <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
              <img
                src="/images/gallery/easy-emis.avif"
                alt=""
                className="w-12"
              />
              <p className="text-[8px] text-center text-gray-600">
                Easy <br /> Emis
              </p>
            </div>
            <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
              <img
                src="/images/gallery/flat-10-year-warranty.avif"
                alt=""
                className="w-12"
              />
              <p className="text-[8px] text-center text-gray-600">
                10 year <br /> warranty
              </p>
            </div>
            <div className="flex flex-col w-16 rounded-3xl border-[1px] p-2 border-gray-600">
              <img
                src="/images/gallery/45-rating.avif"
                alt=""
                className="w-12"
              />
              <p className="text-[8px] text-center text-gray-600">
                4.5 <br /> rating
              </p>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              class="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="pincode"
              name="pincode"
              class="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none"
              placeholder="Enter your pincode"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 hover:shadow-lg text-white py-3 px-6 rounded-3xl  w-full"
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
  )
}

export default Page
