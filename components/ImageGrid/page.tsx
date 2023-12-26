import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
const ImageGrid = () => {
  // Sample list of images with associated text
  const imageList = [
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },
    {
      src: '/images/wooden polishing.jpg',
      text: 'Image 1',
    },

    // Add more images as needed
  ]

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="py-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Top Picks For You</h2>
            <p className="text-gray-600">Impressive Collection For Your Home</p>
          </div>

          <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {imageList.map((item, index) => (
                <div key={index} className="text-center">
                  <Image
                  height={100}
                  width={200}
                    src={item.src}
                    alt={item.text}
                    className="w-full object-cover"
                  />
                  <p className="text-xs mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>


   
    </>
  )
}

export default ImageGrid