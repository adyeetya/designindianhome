'use client'
import React, { useEffect, useState } from 'react'
import DarkMode from '../DarkMode/page'

import SimpleImageSlider from 'react-simple-image-slider'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Hero = () => {
 
 
   const [screenSize, setScreenSize] = useState('')

   const updateScreenSize = () => {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    setScreenSize('lg');
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    setScreenSize('md');
  } else {
    setScreenSize('sm');
  }
};

useEffect(() => {
  // Initial screen size determination
  updateScreenSize();

  // Watch for changes in screen size using matchMedia
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const handleMediaQueryChange = (event: { matches: any }) => {
    updateScreenSize() // Update screen size when media query changes
    console.log('Screen Width:', window.innerWidth)
  }

  mediaQuery.addEventListener('change', handleMediaQueryChange);

  // Cleanup the event listener on component unmount
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
  };
}, []);

 
  let wd = 355
  let h1 = 300
  let h2 = 300

  console.log(screenSize)
  if (screenSize === 'sm') {
    wd = 355
    h1 = 300
    h2 = 300
  }
  if(screenSize === 'md'){
    wd=558
    h1=577
    h2=280
  
  }
    if (screenSize == 'lg') {
      wd = 648
      h1 = 754
      h2 = 410
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
    <>
      
    </>
  )
}

export default Hero
