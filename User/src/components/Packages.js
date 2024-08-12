import React from 'react'


function Packages() {

    const packages = [
        {
          title: 'Primary Planning Package',
          description: "Ideal for small events and gatherings .offers core services to establish the event's foundation. This package usually includes essential elements like venue selection, guest list management, basic decor, catering, and timeline creation. It's designed for clients seeking fundamental planning assistance without requiring extensive customization or elaborate details.",
        },
        {
          title: 'Premium Planning Package',
          description: 'Perfect for medium-sized events with added services. it offers an elevated level of service, providing clients with exclusive access to top-tier vendors, personalized attention, and comprehensive event management. These packages often include luxury amenities, specialized design concepts, and dedicated concierge support, ensuring a truly unforgettable experience.',
        },
        {
          title: 'Luxury Planning Package',
          description: "Comprehensive planning for large, extravagant events. it offer an elevated level of service, providing bespoke experiences tailored to the client's desires. From exclusive venue sourcing and world-class catering to exquisite decor and impeccable coordination, these packages ensure every detail is meticulously planned for an unforgettable event.",
        }
      ];

  return (
    <div className="event-packages">
        <div className='header'>
    <h1>Event Packages</h1>
    <p>Choose the perfect package for your event needs, whether it's a simple gathering or a grand celebration. Our tailored options ensure every detail is covered.</p>
    </div>
    <div className="package-container">
      {packages.map((pkg) => (
       <div className="package-card" key={pkg.title}>
          <h2>{pkg.title}</h2>
          <p className="card-desc">{pkg.description}</p>
         
          
        </div>
      ))}
    </div>
  </div>
)
}

export default Packages
