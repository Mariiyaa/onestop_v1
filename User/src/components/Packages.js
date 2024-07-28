import React from 'react'


function Packages() {

    const packages = [
        {
          title: 'Primary Planning Package',
          description: 'Ideal for small events and gatherings . Budget friendly !!',
          price: 500,
          buttonText: 'Select Basic',
          onClick: () => console.log('Basic package selected')
        },
        {
          title: 'Premium Planning Package',
          description: 'Perfect for medium-sized events with added services.',
          price: 1200,
          buttonText: 'Select Premium',
          onClick: () => console.log('Premium package selected')
        },
        {
          title: 'Luxury Planning Package',
          description: 'Comprehensive planning for large, extravagant events.',
          price: 2500,
          buttonText: 'Select Luxury',
          onClick: () => console.log('Luxury package selected')
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
          <p className="price">${pkg.price}</p>
          <button className="select-btn">{`Select ${pkg.title}`}</button>
        </div>
      ))}
    </div>
  </div>
)
}

export default Packages
