import DarkMode from '@/components/DarkMode/page'
import Hero from '@/components/Hero/page'
import Image from 'next/image'
import Header from '@/components/Navbar/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DarkMode />
    </>
  )
}
