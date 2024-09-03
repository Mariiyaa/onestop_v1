/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Style/aboutUs.css'
import flower from './components/images/flower.jpeg'
function AboutUs() {
  return (
   
      <div className="about-us">
        <div className="about-us-image">

          <img src={flower} alt="About Us Image" />

          <img src="flower.jpeg" alt="About Us Image" />

        </div>

        <div className="about-us-card">
        <ul>
        <li><h1>ABOUT</h1><br></br> <p> We are one of the leading Event Management & Planning companies in Vadodara. We celebrate your love, romance, success, money, health & wellbeing. By organizing powerful & unforgettable celebrations & events. We create your D-day, the best day and the best memory ever!We are dedicated to providing exceptional event management services that exceed our clients' expectations.
        </p></li></ul>
        </div>
       
        <div className="about-us-card">
          
          <ul> 
            <li><h1>WHO WE ARE?</h1><br></br><h3>Full-Service Event Management Company</h3>We deal in complete Planning and Management of Weddings, Corporate Events, Birthday Parties, Baby Showers, Anniversaries and other Social Events.
           
            <h3>Wide Range of Experience in all type of events</h3>OneStop Events has a well-spread network with over 100+ events conducted all over Vadodara which adds an advantage of making every event memorable.
            
            <h3>Creative and Professional team</h3>Highly Creative and experienced professionals who can understand your requirements and can give you a hassle-free and memorable experience.
            </li>
          </ul>
        </div>
        
        <div className="about-us-card">
          <h3>OUR CONTACT</h3>
          <p>
            We are always ready to help you.
            </p>

            <p>


            <a href="mailto:oneStopEventsTeam11@gmail.com" ><img src="mail.png" alt="About Us Image" /></a>
            <a href="tel:+917676123456"><img src="call.png" alt="About Us Image" /></a>
            <img src="insta.png" alt="About Us Image" />

          </p>
        </div>
      </div>
    );
  };
  

  export default AboutUs;
  
  
