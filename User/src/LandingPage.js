import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MissionAndHistory from './components/MissionAndHistory'
import ServiceCards from './components/ServiceCards'
import Packages from './components/Packages'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MissionAndHistory />
      <ServiceCards />
      <Packages />
    </div>
  )
}

export default LandingPage
