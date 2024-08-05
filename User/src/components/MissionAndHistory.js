import React from 'react'
import history from './images/history_img.jpg';
function MissionAndHistory() {
  return (
 <div className="mission-and-history">
      
      <div className="content-container">
        
      
      <h2>Our Mission & History</h2>
        <p>
          At OneStop Events, we strive to create unforgettable experiences for our clients. With years of expertise in event planning, we are dedicated to turning your vision into reality, ensuring every detail is meticulously handled.
        </p>
        <div className="stats">
        <div className="stat">
            <img src="weddings.jpg"/>
          </div>
          <div className="stat">
            <h3>100 events planned</h3>
            <p>Our team has successfully organized over 100 events, ranging from intimate gatherings to grand celebrations, each tailored to meet our clients' unique needs.</p>
          </div>
          <div className="stat">
            <h3>50 packages offered</h3>
            <p>We offer a variety of planning packages, including basic, premium, and luxury options, ensuring that there is something for every budget and requirement.</p>
          </div>
          
          <div className="stat">
            <h3>10 refunds processed</h3>
            <p>Our commitment to our clients is reflected in our transparent refund policy, having processed 10 refunds with utmost professionalism and care.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionAndHistory
