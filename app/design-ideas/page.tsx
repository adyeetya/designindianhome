'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import ProgressBar from '@/components/Progressbar'
import Card from './Card'
import MyForm from '@/components/MyForm'
const page = () => {
  const data = [
    {
      id: 1,
      heading: 'Card 1',
      smallText: 'Description for Card 1',
      image: '/images/stock-image.avif',
    },
    {
      id: 2,
      heading: 'Card 2',
      smallText: 'Description for Card 2',
      image: '/images/stock-image.avif',
    },
    {
      id: 3,
      heading: 'Card 3',
      smallText: 'Description for Card 3',
      image: '/images/stock-image.avif',
    },
    {
      id: 4,
      heading: 'Card 4',
      smallText: 'Description for Card 4',
      image: '/images/stock-image.avif',
    },
    {
      id: 5,
      heading: 'Card 5',
      smallText: 'Description for Card 5',
      image: '/images/stock-image.avif',
    },
    {
      id: 6,
      heading: 'Card 6',
      smallText: 'Description for Card 6',
      image: '/images/stock-image.avif',
    },
    {
      id: 7,
      heading: 'Card 7',
      smallText: 'Description for Card 7',
      image: '/images/stock-image.avif',
    },
    {
      id: 8,
      heading: 'Card 8',
      smallText: 'Description for Card 8',
      image: '/images/stock-image.avif',
    },
    {
      id: 9,
      heading: 'Card 9',
      smallText: 'Description for Card 9',
      image: '/images/stock-image.avif',
    },
    {
      id: 10,
      heading: 'Card 10',
      smallText: 'Description for Card 10',
      image: '/images/stock-image.avif',
    },
    {
      id: 11,
      heading: 'Card 11',
      smallText: 'Description for Card 11',
      image: '/images/stock-image.avif',
    },
    {
      id: 12,
      heading: 'Card 12',
      smallText: 'Description for Card 12',
      image: '/images/stock-image.avif',
    },
    {
      id: 13,
      heading: 'Card 13',
      smallText: 'Description for Card 13',
      image: '/images/stock-image.avif',
    },
    {
      id: 14,
      heading: 'Card 14',
      smallText: 'Description for Card 14',
      image: '/images/stock-image.avif',
    },
    {
      id: 15,
      heading: 'Card 15',
      smallText: 'Description for Card 15',
      image: '/images/stock-image.avif',
    },
    {
      id: 16,
      heading: 'Card 16',
      smallText: 'Description for Card 16',
      image: '/images/stock-image.avif',
    },
    {
      id: 17,
      heading: 'Card 17',
      smallText: 'Description for Card 17',
      image: '/images/stock-image.avif',
    },
    {
      id: 18,
      heading: 'Card 18',
      smallText: 'Description for Card 18',
      image: '/images/stock-image.avif',
    },
    {
      id: 19,
      heading: 'Card 19',
      smallText: 'Description for Card 19',
      image: '/images/stock-image.avif',
    },
    {
      id: 20,
      heading: 'Card 20',
      smallText: 'Description for Card 20',
      image: '/images/stock-image.avif',
    },
    {
      id: 21,
      heading: 'Card 21',
      smallText: 'Description for Card 21',
      image: '/images/stock-image.avif',
    },
    {
      id: 22,
      heading: 'Card 22',
      smallText: 'Description for Card 22',
      image: '/images/stock-image.avif',
    },
  ]

  return (
    <>
      <ProgressBar />
      <Header />

      <div className="mt-10 sm:mt-40 mb-16 mx-auto mx-8 sm:mx-16">
        <div className="p-4  ">
          <span className="text-red-400 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Design ideas</span>
        </div>

        <div className="flex items-center bg-white p-4">
          <div className="w-1 h-8 rounded bg-red-500 mr-2"></div>

          <h1 className="text-3xl font-bold">Home Interior Design</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>
        {/* Rest of the page content goes here */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-16 mb-16">
        <MyForm />
      </div>

      <Footer />
    </>
  )
}

export default page
