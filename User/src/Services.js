
import './Style/services.css'; // Import your CSS file

const Services = () => {

  
    const servicesData = [
      {
        id: 1,
        title: 'Event Planning',
        description: 'Expert event planners to create unforgettable experiences.',
        image: 'event-planners.jpg',
      },
      {
        id: 2,
        title: 'Venue Booking',
        description: 'Seamless venue selection and booking for any event size.',
        image: 'venue.jpg',
      },
      {
        id: 3,
        title: 'Catering',
        description: 'Delicious and diverse catering options to suit your event theme.',
        image: 'food.jpg',
      },
      {
        id: 4,
        title: 'Entertainment',
        description: 'Live music, DJs, performers – we curate the perfect entertainment.',
        image: 'entertainment.png',
      },
      {
        id: 5,
        title: 'Makeup & Rental Dress',
        description: 'Professional Makeup Artist and large Collection of rental customes.',
        image: 'clothes.jpg',
      },
      {
        id: 6,
        title: 'making and customising invitations',
        description: 'We ensure every guest feels valued with our tailored invitation service, adding a personal touch to your event.',
        image: 'invitation.jpeg',
      },
    ];
  
    return (

      


      <div className="services-container">
        <div className="para">
        <h1>OUR SERVICES</h1><br></br>
        <p>We provide a large range of services starting from basic to in details facilities.We provide unique services which makes you stand different!</p>
      </div>
        <div className="services-list">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} className="service-img" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
             
            </div>
          ))}
          
        </div>
        <button placeholder="EXPLORE MORE"> And many more ...</button>
      </div>
    );
  };

  export default Services;


  

  


   

