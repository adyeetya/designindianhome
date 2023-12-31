'use client'
import React from 'react'
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'

import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
const page = () => {
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
          / <span className="text-gray-600 text-sm">Wall decor ideas</span>
        </div>

        {/* tabs */}
        <Tabs id={19} />
      </div>
      <Footer />
    </>
  )
}

export default page
