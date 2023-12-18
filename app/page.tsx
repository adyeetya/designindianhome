import DarkMode from '@/components/DarkMode/page'
import Hero from '@/components/Hero/page'
import Image from 'next/image'
import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'
import TopRibon from '@/components/Navbar/TopRibbon'
export default function Home() {
  return (
    <>
      <TopRibon/>
      <Header />
      <Hero />
    <Footer />
      <DarkMode />
    </>
  )
}
