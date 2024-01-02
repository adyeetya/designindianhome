import Hero from '../components/Hero/page'
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
import '../style/hero.css'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ImageGrid />
      <Collection/>
      <Brands />
      <Display />
      <Stepper/>
      <FAQ/>
      <TabsSection />
     < EndToEndImageGrid/>
      <Footer />
    </>
  )
}
