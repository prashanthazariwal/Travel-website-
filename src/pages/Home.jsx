import React from 'react'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import MarqueSection from '../sections/MarqueSection'
import NatureAdventureSection from '../sections/NatureAdventureSection'
import Services from '../sections/Services'
import Reviews from '../sections/Reviews'
import WhyUs from '../sections/WhyUs'
import Footer from '../sections/Footer'



const Home = () => {
  return (
    <div className="w-full main overflow-hidden bg-[#121212]">
      <HeroSection />
      <AboutSection />
      <MarqueSection />
      <NatureAdventureSection />
      <Services />
      <Reviews />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default Home
