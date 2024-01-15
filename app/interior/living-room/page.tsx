'use client'
import React, { useState, useEffect } from 'react';
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'

import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
const Page = ({}) => {
  
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>([]);
  useEffect(() => {
    const categoryIds = [69]; // Add the category IDs you want to fetch
    const fetchImages = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(`http://89.116.34.51:3002/api/images/${categoryIds}?timestamp=${timestamp}`);
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.error('Error fetching images:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchImages();
  }, []);


  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-32 lg:mt-64 mb-16 mx-auto mx-8 sm:mx-16">
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/design-ideas">Design ideas</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Living room</span>
        </div>

        {/* tabs */}

        <Tabs id={2} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
        {images.map((image) => (
          <img key={image.id} src={`http://89.116.34.51:3002/uploads/${image.filename}`} alt={image.filename} style={{width: '300px', height: '200px', borderRadius: '10px', border: '1px solid black'}}/>
        ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page