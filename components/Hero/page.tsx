'use client'

import { TypeAnimation } from 'react-type-animation';
import DarkMode from '../DarkMode/page'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Main from '../../public/images/a.png'
const Hero = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    video.addEventListener('load', () => {
      setIsPlaying(true);
    });
  }, []);





  
  const [screenSize, setScreenSize] = useState('')

  const updateScreenSize = () => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      setScreenSize('lg')
    } else if (window.matchMedia('(min-width: 460px)').matches) {
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
      updateScreenSize() // Update screen size when media query changes
      console.log('Screen Width:', window.innerWidth)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  let wd = 355
  let h1 = 300
  let h2 = 300

  console.log(screenSize)
  if (screenSize === 'sm') {
    wd = 355
    h1 = 300
    h2 = 300
  }
  if (screenSize === 'md') {
    wd = 558
    h1 = 577
    h2 = 280
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
    {/*   <MaxWidthWrapper className="mb-12 mt-14 lg:mt-52 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="">
            <SimpleImageSlider
              width={wd}
              height={h1}
              images={images1}
              showBullets={false}
              showNavs={false}
              autoPlay={true}
              style={{ margin: '0 auto' }}
            />
          </div>
          <div className="flex-col gap-4 ">
            <Image
              height={100}
              src="/images/new-launch.jpeg"
              width={wd}
              alt=""
              className="pb-4 lg:w-full"
            />
            <div className="">
              <SimpleImageSlider
                width={wd}
                height={h2}
                images={images2}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
                style={{ margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper> */}
      <div className="wrapperlatest mt-16 pt-60">
        <h3 style={{fontFamily:"Impact", fontWeight:"400"}}>Indias No.1 Modular Kitchen & Wardrobe Brand in Delhi - NCR</h3>
   
        </div>
        <div className="container flex items-center justify-between px-4 py-2 text-center ">
        <TypeAnimation
      sequence={[
         'Best Home Interior Brand in Delhi ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Home Renovation Service in Delhi',
        1000,
        'Top Architectural & Interior Brand',
        1000,
        
        'Top Choice for Home Interior in India ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block',  }}
      repeat={Infinity}
    /></div>

    <div className="main-hero">
	<div className="cover">
		<div className="box a">
      <h1>OUR WORK<br/>
CENTERS ON RESULTS</h1>
    </div>
		<div className="box b">OUR STYLE<br/>
IS TO DELIVER SMILES</div>
	</div>
</div>




<div className="container mx-auto rounded-3xl ">
 

 
 <section className="newz">
   <div className="flex flex-wrap  ">
   <div className=" mb-4" id='news'>
 
     <video loop autoPlay controls={isPlaying} src="video/vid1.mp4"  height={10} width={1500}
         className="rounded shadow-md"
       
         
       />
       </div>
       </div>
       </section>


</div>


    </>
  )
}

export default Hero
