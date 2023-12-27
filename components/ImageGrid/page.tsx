import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const ImageGrid = () => {
  // Sample list of images with associated text
  const imageList = [
    {
      src: '/images/top-picks/bathroom renovation.jpg',
      text: 'Bathroom Renovation',
    },
    {
      src: '/images/top-picks/bedroomrenovation.jpg',
      text: 'Bedroom Renovation',
    },
    {
      src: '/images/top-picks/beds.jpg',
      text: 'Beds',
    },
    {
      src: '/images/top-picks/door.jpg',
      text: 'Doors',
    },
    {
      src: '/images/top-picks/electric.jpg',
      text: 'Electric',
    },
    {
      src: '/images/top-picks/exterior cladding.jpg',
      text: 'Exterior Cladding',
    },
    {
      src: '/images/top-picks/glass partition.jpg',
      text: 'Glass Partitions',
    },
    {
      src: '/images/top-picks/Interior Lightening.jpg',
      text: 'Interior Lightening',
    },
    {
      src: '/images/top-picks/kitchen renovation.jpg',
      text: 'Kitchen Renovation',
    },
    {
      src: '/images/top-picks/plumbing.jpg',
      text: 'Plumbing',
    },
    {
      src: '/images/top-picks/pop.jpg',
      text: 'Pop',
    },
    {
      src: '/images/top-picks/sofa.jpg',
      text: 'Sofa',
    },
    {
      src: '/images/top-picks/tiling.jpg',
      text: 'Tiling',
    },
    {
      src: '/images/top-picks/upvc window.jpg',
      text: 'UPVC Windows',
    },
    {
      src: '/images/top-picks/Vertical Garden.jpg',
      text: 'Vertical Gardens',
    },
    {
      src: '/images/top-picks/wall pannaling.jpg',
      text: 'Wall Panneling',
    },
    {
      src: '/images/top-picks/wooden flooring.jpg',
      text: 'Wooden Flooring',
    },
    {
      src: '/images/top-picks/wooden polishing.jpg',
      text: 'Wooden Polishing',
    },

    // Add more images as needed
  ]

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="py-2">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Top Picks For You</h2>
            <p className="text-gray-600">Impressive Collection For Your Home</p>
          </div>

          <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {imageList.map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={item.src}
                    alt={item.text}
                    className="w-full  object-cover"
                  />
                  <p className="text-sm mt-2">{item.text}</p>
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
