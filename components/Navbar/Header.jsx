"use client"
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

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

  return (
    <div>
        <div className="bg-gray-200 h-10 flex justify-center">
            <p className="bg-red-700 text-white m-2 sticky">DIAMOND JWELLERY</p>
        </div>
      <animated.div
        style={{
          transform: springPropsCenterLogo.translateY.interpolate(y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`),
          opacity: springPropsCenterLogo.opacity,
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
      >
        <div className="text-black text-center py-2 w-200px m-200px pt-4">
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
            </div>
          </div>
        </div>
      </animated.div>

      {/* <div
        className={`bg-white-100 fixed w-full top-100 z-50 transition-transform ease-in-out duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
          }`}
        style={{ position: 'sticky' }}> */}
        <div className={`bg-white-100`}>
          <div className="max-w-screen-xl mx-auto py-2 flex justify-center items-center gap-10 relative">
            <animated.img
              src="https://www.kalyanjewellers.net/images/logo-icon.svg"
              alt="Left Logo"
              className="h-12 w-12"
              style={{
                transform: springPropsLeftLogo.translateX.interpolate(x => `translateX(${x}%)`),
                opacity: springPropsLeftLogo.opacity,

                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              }}
            />
            {/* Main Header Navigation scroll up header */}
            <nav className="hidden md:flex items-center space-x-12">
              <p className="text-m font-semibold">Our Brands</p>
              <p className="text-m font-semibold">Muhurat</p>
              <p className="text-m font-semibold">Shop Online</p>
              <animated.img
                src="https://www.kalyanjewellers.net/images/kalyan_logo.svg"
                alt="Center Logo"
                className="h-30 w-20 top-2/4 transform -translate-y-2/4 scale-150 "
                style={{
                  transform: springPropsCenterLogo.translateY.interpolate(y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`),
                  opacity: springPropsCenterLogo.opacity,
                  display: springPropsCenterLogo.opacity.interpolate(opacity => opacity === 0 ? 'none' : 'block'),
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
        {/* </div> */}
      </div>
      );
};

      export default Header;
