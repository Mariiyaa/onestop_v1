import React from 'react'
import bgimg from "./images/hero_bg.jpg"
function HeroSection() {
    
  return (
    <div className='Hero-sec'>
        <div className="hero-section">
      <img src={bgimg} alt="Event Planning" className="hero-image" />
    
      <div className="hero-content">
        <h1>One Stop Events</h1>
        <p>At One Stop Events, we offer comprehensive event planning services tailored to your needs. Choose from our Basic, Premium, or Luxury packages and track your event’s progress with ease.</p>
      </div>
    </div>
    </div> 
    
  )
}

export default HeroSection;
