import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
//import './PackagesList.css'


const PackagesList = () => {
    const [packages, setPackages] = useState([]);
    const { category } = useParams();

    const catalog= {
         textAlign: 'start',
    }


    const categoryData= {
        
        Wedding: {
       catalog_1:"Haldi",
       catalog_2:"Mehendi",
       catalog_3:"Sangeet",
       catalog_4:"Pheras",
       catalog_5:"Reception",
       catalog_6:"and many more ....",   
       
        description: 'At One Stop Events, we understand that your wedding day is one of the most cherished moments of your life. Our expert team is dedicated to crafting a seamless and unforgettable celebration that reflects your unique love story. From the initial consultation to the final send-off, we meticulously handle every detail, including venue selection, décor, catering, and entertainment. We collaborate with top-notch vendors and employ innovative planning tools to ensure that your wedding day is flawless. Whether you envision an opulent affair or an intimate gathering, we tailor our services to meet your desires and budget. Our goal is to alleviate the stress of planning and allow you to focus on what truly matters – creating lifelong memories with your loved ones. With One Stop Events, you can rest assured that your wedding will be a beautiful, stress-free experience that exceeds your expectations.',
        },
        
        Milestones: {
        catalog_1:"Birthday",
        catalog_2:"Anniversary",
        catalog_3:"graduation",
        catalog_4:"house warming",
        catalog_5:"meet-up",
        catalog_6:"and many more ....",   
        description: 'Mark life’s significant moments with elegance and style through One Stop Events’ milestone event planning services. Whether celebrating a birthday, anniversary, graduation, or other important achievements, we provide comprehensive planning to make your milestone event truly special. Our experienced team works with you to design a personalized event that reflects your vision and highlights the significance of the occasion. From selecting a venue and organizing entertainment to coordinating catering and décor, we handle all the details with precision and creativity. Our goal is to ensure that your milestone celebration is a memorable and joyful experience for you and your guests. With One Stop Events, you can relax and enjoy the festivities while we take care of every aspect of planning, ensuring that your special occasion is celebrated in style and with the utmost attention to detail. your birthday unforgettable with our exciting packages.',
        },
       
        Corporate:  {

            catalog_1:"Team dinner",
            catalog_2:"Promotion party",
            catalog_3:"Farewell party",
            catalog_4:"Project launch",
            catalog_5:"Orientation",
            catalog_6:"and many more ....", 
        description: ' One Stop Events excels in orchestrating corporate events that are both professional and impactful. We specialize in planning and executing a wide range of business events, including conferences, seminars, product launches, and company retreats. Our team is adept at understanding your business goals and tailoring each event to align with your brand’s vision and objectives. We handle every aspect, from venue selection and logistics to audiovisual requirements and catering, ensuring a smooth and successful event. Our attention to detail and commitment to excellence mean that your corporate event will run seamlessly, leaving a lasting impression on your attendees. By partnering with One Stop Events, you ensure that your corporate gatherings are not only efficiently managed but also strategically designed to enhance your company’s reputation and achieve your desired outcomes.',
        },

        Cultural : {
            catalog_1:"Diwali party",
            catalog_2:"Holi",
            catalog_3:"Baby shower",
            catalog_4:"Pooja",
            catalog_5:"christmas dinner",
            catalog_6:"and many more ....", 
        description : "Celebrate the richness and diversity of our world with One Stop Events' cultural event planning services. We are passionate about bringing cultural traditions and heritage to life through meticulously organized events that honor and showcase diverse customs and practices. Whether you’re hosting a festival, cultural fair, or heritage celebration, our team provides expertise in every aspect of event planning. From securing appropriate venues and coordinating with performers to managing cultural exhibits and ensuring authentic experiences, we handle it all. We work closely with you to ensure that every detail aligns with your vision and cultural values. Our goal is to create memorable experiences that foster understanding and appreciation of different cultures while delivering an event that is both engaging and educational. With One Stop Events, your cultural celebration will be a vibrant and inclusive event that resonates with attendees."
        }
        // Add more categories and their respective images
};

const { catalog_1,catalog_2,catalog_3,catalog_4,catalog_5,catalog_6, description } = categoryData[category] || {};




    useEffect(() => {
        const fetchPackages = async () => {
            try {
                console.log(`${category}`)

                const response = await axios.get(`/api/packages/${category}`);
                setPackages(response.data);
                
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchPackages();
    }, [category]);

    return (
        <Container className="mt-4">
            <h2>{category} Packages</h2>
            
            <h6>Catalog : </h6>
            <div className="catalog flex">

          <ul id="catalog-line" style={catalog}><p>
            <li>{catalog_1}</li>
            <li>{catalog_2}</li>
            </p></ul>
          <ul id="catalog-line" style={catalog}><p>
            <li>{catalog_3}</li>
            <li>{catalog_4}</li>
            </p></ul>
          <ul id="catalog-line" style={catalog}><p>
          <li>{catalog_5}</li>
          <li>{catalog_6}</li>
            </p></ul>
          </div>
            {description && <p className='description'>{description}</p>}
            <Row>
                {packages.map((pkg) => (
                    <Col key={pkg._id} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{pkg.package_name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Guest Limit: {pkg.guest_limit}</Card.Subtitle>
                                <ul>
                                    {Object.entries(pkg.services).map(([service, available]) => (
                                        <li key={service}>
                                            {available ? '✅' : '❌'} {service}
                                        </li>
                                    ))}
                                </ul>
                                <Card.Text>Price: Rs.{pkg.price}</Card.Text>
                                <Link to={`/packages/details/${pkg._id}`} className="btn btn-primary">View Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PackagesList;
