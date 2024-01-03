'use client'
import Hero from '../components/Hero/page'
import { Fragment } from 'react'
import ImageGrid from '../components/ImageGrid/page'
import Image from 'next/image'
import Brands from '../components/Brands/page'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import Display from '../components/Display/page'
import EndToEndImageGrid from '../components/EndToEndImageGrid/page'
import Stepper from '../components/Stepper/page'
import FAQ from '../components/FAQ/page'
import Collection from '../components/Collection/page'
import TabsSection from '../components/TabsSection/page'
import MyForm from '../components/MyForm'
import '../style/hero.css'
import Omsairam from '../components/Navbar/Omsairam'

export default function Home() {
  return (
    <>
      <Fragment>
        <Omsairam />
        <Header />
        <Hero />
        <ImageGrid />
        <Collection />
        <Brands />
        <Display />
        <Stepper />
        <TabsSection />
        <EndToEndImageGrid />
        <FAQ />
        <div className="bg-amber-50 p-4">
          <MyForm />
        </div>

        <Footer />
      </Fragment>
    </>
  )
}
