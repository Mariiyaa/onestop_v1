import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './BookingSummary.css';
import axios from 'axios';
import { useData } from './UserData';

function BookingSummary() {
    const location = useLocation();
    const navigate = useNavigate();
    const [maxDate, setMaxDate] = useState('');

    const { selectedPreferences = {}, packageDetails = {} } = location.state || {};

    const { Data } = useData();

    // Check if necessary data is available
    const isDataAvailable = packageDetails.package_name && Object.keys(selectedPreferences).length > 0;
    useEffect(() => {
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];
        setMaxDate(today);
    }, []);
    // Initialize state for form data
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        date: '',
        time: '',
        guests: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default behavior immediately

        // Validate that the user is signed in
        if (Data.name === "") {
            alert("Please sign in first");
            return; // Stop execution if not signed in
        }

        // Validate form fields
        if (formData.name === "" || formData.date === "" || formData.contact === "" || formData.time === "" || formData.guests === "") {
            alert("Please fill out all the form fields.");
            return; // Stop execution if form fields are incomplete
        }

        try {
            const formattedPreferences = Object.keys(selectedPreferences).map((service) => {
                return {
                    service,
                    selectedVendors: selectedPreferences[service].map((vendorIndex) => {
                        // Map to actual vendor details using the index
                        return packageDetails.vendor_details[service]?.[vendorIndex] || {};
                    })
                };
            });

            // Prepare data to send to the backend
            const bookingData = {
                formData,
                packageDetails: {
                    packageName: packageDetails.package_name,
                    category: packageDetails.category,
                    vendors: formattedPreferences,
                    price: packageDetails.price, // Use formatted preferences
                },
                userEmail: Data.email,  // Assuming `Data` has user email
            };

            console.log(bookingData);

            // Send the booking data to the backend using axios

            // Redirect to the payment page with formData in the state
            navigate('/payment', { state: { bookingData } });
        } catch (error) {
            console.error(error);
            alert('There was an issue submitting your booking. Please try again.');
        }
    };

    if (!isDataAvailable) {
        return (
            <div className="container mt-4">
                <h3>Error: Booking details are missing.</h3>
                <p>Please ensure that all necessary data is provided.</p>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h3>Booking Summary</h3>
                    <div>
                        <h4>{packageDetails.package_name}</h4>
                        {Object.keys(selectedPreferences).map((service) => (
                            <div key={service}>
                                <h5>{service}</h5>
                                <ul>
                                    {selectedPreferences[service].map((vendorIndex) => {
                                        const vendor = packageDetails.vendor_details[service]?.[vendorIndex];
                                        return vendor ? (
                                            <li key={vendorIndex}>
                                                {vendor.name} - {vendor.contact}
                                            </li>
                                        ) : (
                                            <li key={vendorIndex}>Vendor details not available</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Event Details</h3>
                    <Form className="sum-form" onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your contact number"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                min={maxDate} 
                                onChange={handleChange}
                                className="dropdown-opt"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="dropdown-opt"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formGuests">
                            <Form.Label>Number of Guests</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="dropdown-opt"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit Booking
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default BookingSummary;
