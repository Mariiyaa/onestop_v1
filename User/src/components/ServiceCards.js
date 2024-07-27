import React from 'react'
import bday from'./images/birthday.png';
import corp from'./images/corporate.jpg';
import wed from './images/wedding.jpg';
// const servicesData = [
//     {
//       title: 'Wedding Planning',
//       image: './images/wedding.jpg', 
//       description: 'Our wedding planning service ensures your special day is perfect, from venue selection to floral arrangements.',
//     },
//     {
//       title: 'Corporate Events',
//       image: './images/corporate.jpg', 
//       description: 'We organize professional corporate events, including conferences, seminars, and team-building activities.',
//     },
//     {
//       title: 'Birthday Parties',
//       image: './images/birthday.png', 
//       description: 'Make your birthday celebrations memorable with our customized party planning services, tailored to your preferences.',
//     },
//   ];

function ServiceCards() {
  return (
    <div>
      <section className="event-planning-services">
      <h2>Our Event Planning Services</h2>
      <p>OneStop Events offers a range of event planning services to make your special occasions unforgettable. From basic planning to luxury packages, we have something for every need. Our team ensures every detail is perfect, so you can enjoy your event stress-free.</p>
      <div className="service-cards">
        
          <div className="service-card">
            <img src={wed} alt="wedding" />
            <h3>Wedding Planning</h3>
            <p>Our wedding planning service ensures your special day is perfect, from venue selection to floral arrangements.</p>   

            <button class="button-style con">Learn More</button>
          </div>
       

          <div className="service-card">
            <img src={corp} alt="corparate" />
            <h3>Corporate Events</h3>
            <p>We organize professional corporate events, including conferences, seminars, and team-building activities.</p>   

            <button class="button-style con" >Learn More</button>
          </div>

          <div className="service-card">
            <img src={bday} alt="birthday" />
            <h3>Birthday Parties</h3>
            <p>Make your birthday celebrations memorable with our customized party planning services, tailored to your preferences.</p>   

            <button class="button-style con">Learn More</button>
          </div>
      </div>
    </section>
    </div>
  )
}

export default ServiceCards
