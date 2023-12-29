import Hero from '../components/Hero/page'
import ImageGrid from '../components/ImageGrid/page'
import Image from 'next/image'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import TopRibon from '../components/Navbar/TopRibbon'
import Display from '../components/Display/page'
import EndToEndImageGrid from '../components/EndToEndImageGrid/page'
import Stepper from '../components/Stepper/page'
import FAQ from '../components/FAQ/page'
import '../style/hero.css'
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ImageGrid />
      <Stepper />
      <FAQ />
      <EndToEndImageGrid />
      <Display />
      <Footer />
    </>
  )
}
