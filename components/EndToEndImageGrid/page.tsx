import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
const EndToEndImageGrid = () => {
  // Sample list of images with associated text
  const imageList = [
    {
      src: '/images/end/banquet renovation.jpg',
      text: 'Banquets Renovation',
    },
    {
      src: '/images/end/bathroom renovation1.jpg',
      text: 'Bathroom Renovation',
    },
    {
      src: '/images/end/Bedroom Renovation.jpg',
      text: 'Bedroom Renovation',
    },
    {
      src: '/images/end/Farmhouse Renovation.jpg',
      text: 'Farmhouse Renovation',
    },
    {
      src: '/images/end/GYM & SPA renovation.jpg',
      text: 'GYM & SPA Renovation',
    },
    {
      src: '/images/end/Hotel Renovation.jpg',
      text: 'Hotel Renovation',
    },
    {
      src: '/images/end/Interior Renovation.jpg',
      text: 'Interior Renovation',
    },
    {
      src: '/images/end/Living Room Renovation.jpg',
      text: 'Living Room Renovation',
    },
    {
      src: '/images/end/Lounge Renovation.jpg',
      text: 'Lounge Renovation',
    },
    {
      src: '/images/end/mandir renovation.jpg',
      text: 'Mandir Room Renovation',
    },
    {
      src: '/images/end/SPA renovation.jpg',
      text: 'Kitchen & Wardrobe Renovation',
    },
    {
      src: '/images/end/Structural Renovation.jpg',
      text: 'Structural Renovation',
    },
    {
      src: '/images/end/terrace renovation.jpg',
      text: 'Terrace Renovation',
    },
    {
      src: '/images/end/Villa renovation.jpg',
      text: 'Villa Renovation',
    },

    // Add more images as needed
  ]

  return (
    <>
      <MaxWidthWrapper className="mb-12 sm:mt-28 mt-16 flex flex-col items-center justify-center text-center">
        <div className="py-2">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">End To End Structural</h2>
            <p className="text-gray-600">
              End To End We Undertake Including Complete Renovations
            </p>
          </div>

          <div className="container mx-auto mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {imageList.map((item, index) => (
                <div key={index} className="text-center md:w-full sm:w-4/5">
                  <div className="mb-4 sm:ml-8">
                    <Image
                      height={100}
                      width={200}
                      src={item.src}
                      alt={item.text}
                      className="w-full object-cover"
                    />
                    <p className="text-sm mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default EndToEndImageGrid
