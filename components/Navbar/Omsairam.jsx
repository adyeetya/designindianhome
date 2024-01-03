"use client";
import React, { useRef, useEffect } from 'react';

const Omsairam = () => {
  const marqueeRef = useRef();

  useEffect(() => {
    const marqueeContent = marqueeRef.current.innerHTML;

    const cloneMarquee = () => {
      marqueeRef.current.innerHTML += marqueeContent;
    };

    const interval = setInterval(cloneMarquee, 40); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-black font-bold text-white text-2xl" style={{ zIndex: '10000', position: 'fixed', width: '100%', top: 0 }}>
      <h1 className="text-center text-xs text-white font-bold pt-1">ॐ साईं राम</h1>
      <marquee
        ref={marqueeRef}
        behavior="scroll"
        direction="left"
        style={{ whiteSpace: 'nowrap', width: '100%', right: 0 }} // Set initial position to right
      >
        100% Guaranteed Quotes for all Modular Kitchens & Wardrobes 🙂 Largest Manufacturing Brand Across Noida - Delhi - NCR 🙂 Bring Us any Quote & Take Flat 7% Off.
      </marquee>
    </div>
  );
}

export default Omsairam;
