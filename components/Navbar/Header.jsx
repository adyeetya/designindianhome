"use client"
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [springPropsLeftLogo, setSpringPropsLeftLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,
  }));
  const [springPropsCenterLogo, setSpringPropsCenterLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,
  }));
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSpringPropsLeftLogo({
      translateY: scrollDirection === 'up' ? -100 : 0,
      translateX: scrollDirection === 'down' ? 0 : -100,
      opacity: scrollDirection === 'up' ? 0 : 1,
      scale: scrollDirection === 'up' ? 0.5 : 1,
    });
    setSpringPropsCenterLogo({
      translateY: scrollDirection === 'down' ? 100 : 0,
      translateX: scrollDirection === 'down' ? 0 : -100,
      opacity: scrollDirection === 'down' ? 0 : 1,
      scale: scrollDirection === 'down' ? 0.5 : 1,
    });
  }, [scrollDirection, setSpringPropsLeftLogo, setSpringPropsCenterLogo]);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(prevState => !prevState);
  };
  

  return (
    <div className="bg-white">
      <div className="hidden md:flex">
        {/* Desktop Header */}
        <div
          className={`bg-white py-3 mb-px w-full z-50 transition-transform ease-in-out duration-300 ${
            scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
          }`}
          style={{
            position: 'fixed',
            top: 48,
            marginTop: 20,
          }}
        >
          <animated.div
            style={{
              transform: springPropsCenterLogo.translateY.interpolate(
                y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`
              ),
              opacity: springPropsCenterLogo.opacity,
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            }}
          >
            <div className=" text-black text-center py-2 w-200px m-200px pt-4">
              <div className="max-w-screen-xl mx-auto flex justify-between items-center m-200px">
                {/* Right side */}
                <div className="flex items-center space-x-4">
                  <p className="text-xs font-semibold">/My Kalyan</p>
                  <p className="text-xs font-semibold">/Media</p>
                  <p className="text-xs font-semibold">/Kalyan News</p>
                  <p className="text-xs font-semibold">/Gold Rates</p>
                  <p className="text-xs font-semibold">/Digital Gold</p>
                </div>

                {/* Left side */}
                <div className="flex items-center space-x-4">
                  <p className="text-xs font-semibold">/Store Locator</p>
                  <p className="text-xs font-semibold">/Feedback</p>
                  <p className="text-xs font-semibold">/Contact</p>
                  <SocialIcon
                    network="twitter"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="facebook"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="instagram"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="linkedin"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                </div>
              </div>
            </div>
          </animated.div>

          <div
            className="max-w-screen-xl mx-auto flex justify-center items-center gap-10 relative "
            style={{}}
          >
            <animated.img
              src="https://www.kalyanjewellers.net/images/logo-icon.svg"
              alt="Left Logo"
              className="hidden md:flex h-12 w-12"
              style={{
                transform: springPropsLeftLogo.translateX.interpolate(x => `translateX(${x}%)`),
                opacity: springPropsLeftLogo.opacity,
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              }}
            />
            {/* Main Header Navigation scroll up header */}
            <div className="">
              <nav className="hidden md:flex items-center space-x-12">
                <p className="text-m font-semibold">Our Brands</p>
                <p className="text-m font-semibold">Muhurat</p>
                <p className="text-m font-semibold">Shop Online</p>
                <animated.img
                  src="https://www.kalyanjewellers.net/images/kalyan_logo.svg"
                  alt="Center Logo"
                  className="h-30 w-20 top-2/4 transform -translate-y-2/4 scale-150 "
                  style={{
                    transform: springPropsCenterLogo.translateY.interpolate(
                      y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`
                    ),
                    opacity: springPropsCenterLogo.opacity,
                    display: springPropsCenterLogo.opacity.interpolate(
                      opacity => (opacity === 0 ? 'none' : 'block')
                    ),
                    transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',
                  }}
                />
                <p className="text-m font-semibold">About Us</p>
                <p className="text-m font-semibold">Gift Card</p>
                <p className="text-m font-semibold">Ambassadors</p>
                <p className="text-m font-semibold">Investors</p>
              </nav>
            </div>
          </div>
        </div>
      </div>

    
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0">
        <div className="flex justify-between items-center px-4 py-2 bg-white">
          <img
            src="https://www.kalyanjewellers.net/images/logo-icon.svg"
            alt=""
            className="h-12 w-12"
          />
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {mobileMenuVisible && (
          <animated.div
            className="bg-green-600 fixed top-0 left-0 w-full h-full overflow-y-scroll text-white"
            style={{
              opacity: springPropsCenterLogo.opacity,
              display: springPropsCenterLogo.opacity.interpolate(
                (opacity) => (opacity === 0 ? 'none' : 'block')
              ),
              transition: 'opacity 0.3s ease-in-out',
              pointerEvents: mobileMenuVisible ? 'auto' : 'none', // Add this line
            }}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center py-2 gap-4 z-40">
              <Image src="https://www.kalyanjewellers.net/images/logo-icon.svg" alt="" />
              <div className="flex gap-3">
              <SocialIcon
                    network="twitter"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="facebook"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="instagram"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="linkedin"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
              </div>
              <p className="text-m font-semibold">Our Brands</p>
              <p className="text-m font-semibold">Muhurat</p>
              <p className="text-m font-semibold">Shop Online</p>
              <p className="text-m font-semibold">About Us</p>
              <p className="text-m font-semibold">Gift Card</p>
              <p className="text-m font-semibold">Ambassadors</p>
              <p className="text-m font-semibold">Investors</p>
              {/* ... (Add more mobile menu items as needed) */}
            </div>
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Header;
