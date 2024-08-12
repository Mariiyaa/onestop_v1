import React from 'react'

import HeroSection from './components/HeroSection'
import MissionAndHistory from './components/MissionAndHistory'
import ServiceCards from './components/ServiceCards'
import Packages from './components/Packages'
import TestSlide from './components/TestSlide'


function LandingPage() {
  return (
    <div>
      <HeroSection />
      <MissionAndHistory />
      <ServiceCards />
      <Packages />
      <TestSlide />
    </div>
  )
}

export default LandingPage
