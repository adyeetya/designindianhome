import React from 'react'

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-16 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Your Hero Title
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          A brief description of your hero section.
        </p>
        <a
          href="#"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default Hero