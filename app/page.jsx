import Hero from '@/components/Hero/page'
import ImageGrid from '@/components/ImageGrid/page'
import Image from 'next/image'
import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'
import TopRibon from '@/components/Navbar/TopRibbon'
import Display from '@/components/Display/page'
import EndToEndImageGrid from '@/components/EndToEndImageGrid/page'
import Collection from '@/components/Collection/page'
import "../style/hero.css"
export default function Home() {
  return (
    <>

      <Header />
      <Hero />
      <ImageGrid />
      <EndToEndImageGrid />
      <Display/>
      <Collection/>
      <Footer />
    </>
  )
}
