import DarkMode from '@/components/DarkMode/page'
import EndToEndImageGrid from '@/components/EndToEndImageGrid/page'
import Hero from '@/components/Hero/page'
import ImageGrid from '@/components/ImageGrid/page'
import Image from 'next/image'
import Header from '@/components/Navbar/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ImageGrid/>
      <EndToEndImageGrid />
      <DarkMode />
    </>
  )
}
