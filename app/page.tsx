import Hero from '@/components/Hero/page'
import ImageGrid from '@/components/ImageGrid/page'
import Image from 'next/image'
import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'
import TopRibon from '@/components/Navbar/TopRibbon'
import EndToEndImageGrid from '@/components/EndToEndImageGrid/page'
export default function Home() {
  return (
    <>
      <TopRibon />
      <Header />
      <Hero />
      <ImageGrid />
      <EndToEndImageGrid />
      <Footer />
    </>
  )
}
