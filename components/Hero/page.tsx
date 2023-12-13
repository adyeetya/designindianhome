'use client'
import React, { useEffect, useState } from 'react'
import DarkMode from '../DarkMode/page'
import ImageSlider from '../ImageSlider.tsx/page'
import SimpleImageSlider from 'react-simple-image-slider'

const Hero = () => {
  // const [screenSize, setScreenSize] = useState('')

  // const determineScreenSize = () => {
  //   const width = window.innerWidth

  //   if (width >= 1024) {
  //     setScreenSize('lg')
  //   } else if (width >= 768) {
  //     setScreenSize('md')
  //   } else {
  //     setScreenSize('sm')
  //   }
  // }

  // useEffect(() => {
  //   // Initial screen size determination
  //   determineScreenSize()

  //   // Update screen size on window resize
  //   const handleResize = () => {
  //     determineScreenSize()
  //   }

  //   window.addEventListener('resize', handleResize)

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])
 
   const [screenSize, setScreenSize] = useState('')

   const updateScreenSize = () => {
     if (window.matchMedia('(min-width: 1280px)').matches) {
       setScreenSize('lg')
     } else if (window.matchMedia('(min-width: 768px)').matches) {
       setScreenSize('md')
     } else {
       setScreenSize('sm')
     }
   }

   useEffect(() => {
     // Initial screen size determination
     updateScreenSize()

     // Watch for changes in screen size using matchMedia
     const mediaQuery = window.matchMedia('(min-width: 768px)')

     const handleMediaQueryChange = (event: { matches: any }) => {
       if (event.matches) {
         setScreenSize('md')
       } else {
         setScreenSize('sm')
       }
     }

     mediaQuery.addEventListener('change', handleMediaQueryChange)

     // Cleanup the event listener on component unmount
     return () => {
       mediaQuery.removeEventListener('change', handleMediaQueryChange)
     }
   }, []) 
 
  let wd = 912
  let h1 = 908
  let h2 = 410
  console.log(screenSize)
  if (screenSize === 'sm') {
    wd = 410
    h1 = 350
    h2 = 350
  }
  if(screenSize === 'md'){
    wd=960
  }

  const images1 = [
    { url: '/images/top1.jpeg' },
    { url: '/images/top2.jpeg' },
    { url: '/images/top3.jpeg' },
    { url: '/images/top4.jpeg' },
    { url: '/images/top5.jpeg' },
  ]
  const images2 = [
    { url: '/images/right1.jpeg' },
    { url: '/images/right2.jpeg' },
    { url: '/images/right3.jpeg' },
    { url: '/images/right4.jpeg' },
    { url: '/images/right5.jpeg' },
  ]
  return (
    <div className=" text-white py-8 px-2 md:px-4 lg:px-4 xl:px-4 mx-auto">
      <div className="max-w-screen-xl ">
        <div className="flex flex-col gap-4 justify-items-center xl:flex-row lg:ml-2">
          <div className="">
            <SimpleImageSlider
              width={wd}
              height={h1}
              images={images1}
              showBullets={false}
              showNavs={false}
              autoPlay={true}
            />
          </div>
          <div className="flex-col gap-4 ">
            <img
              src="/images/new-launch.jpeg"
              alt=""
              className="pb-4 lg:w-full"
              style={{width:`${wd}`}}
             
            />
            <div className="lg:w-full">
              <SimpleImageSlider
                width={wd}
                height={h2}
                images={images2}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
