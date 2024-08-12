import React from 'react';
import '../LandStyle.css'; // Import your CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    name: "- Emily Johnson",
    title: "Wedding Planner",
    text: ' "OneStop Events made my wedding planning a breeze! Their attention to detail was impeccable." ',
  },
  {
    name: "- Michael Smith",
    title: "Corporate Event Manager",
    text: '"The team at OneStop Events exceeded our expectations for our annual conference. Highly recommend!" ',
  },
  {
    name: "- Sarah Lee",
    title: "Birthday Party Host",
    text: "\"I was amazed at how smoothly everything went for my daughter's birthday party. Thank you, OneStop Events!\"",
  },
  {
    name: "- David Brown",
    title: "Non-Profit Organizer",
    text: ' "OneStop Events helped us organize a charity gala that was both elegant and impactful. Fantastic service!" ',
  },
  {
    name: "- Jessica Taylor",
    title: "Event Attendee",
    text: ' "I attended an event organized by OneStop Events, and it was flawless from start to finish. Truly impressive!" ',
  },
  {
    name: "- Chris Wilson",
    title: "Family Reunion Coordinator",
    text: ' "Our family reunion was a huge success thanks to OneStop Events. They took care of everything!" ',
  },
];

const TestSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonials-section">
      <h2>See what our clients say about their unforgettable events with us.</h2>
      <div className='testimonies'>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">{"★★★★★"}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div>
                <p className="author-name">{testimonial.name}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default TestSlide;
