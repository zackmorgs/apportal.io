import Image from 'next/image'
import "@/styles/homepage.scss";

import ServicesHomepage from '@/components/services-homepage';
import HeroHomepage from '@/components/hero-homepage'

export default function Home() {
  return (
    <>
      <HeroHomepage/>
      <ServicesHomepage/>
    </>
  )
}
