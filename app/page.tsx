import DarkMode from '@/components/DarkMode/page'
import Hero from '@/components/Hero/page'
import ImageGrid from '@/components/ImageGrid/page'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <ImageGrid/>
      <DarkMode />
    </>
  )
}
