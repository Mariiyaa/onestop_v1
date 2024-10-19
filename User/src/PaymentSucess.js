import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Style/PaymentSuccess.css';

function PaymentSuccess() {
    const location = useLocation();
  //  const sessionId = useRef(new URLSearchParams(location.search).get('session_id')); // Use useRef to store session ID
    const hasPostedData = useRef(false); // Flag to ensure data is posted only once
    const navigate = useNavigate();

    useEffect(() => {
        const postOrderDetails = async () => {
            const storedBookingData = localStorage.getItem('bookingData');
            let bookingData;

            if (storedBookingData) {
                bookingData = JSON.parse(storedBookingData);
                console.log('Retrieved Booking Data:', bookingData);
            } else {
                console.error('No booking data found in local storage');
                return; 
            }

            try {
                if (!hasPostedData.current) {
                    hasPostedData.current = true;
                    const response = await axios.post('/OrderDetails', { bookingData}); // Use ref's current value
                    console.log('Order submitted successfully:', response.data);
                    localStorage.removeItem('bookingData'); 
                     // Set the flag to prevent re-posting
                }
            } catch (error) {
                console.error('Error submitting order:', error.response ? error.response.data : error.message);
            }
        };

        
postOrderDetails();
    }, []); 
    // The empty dependency array ensures this effect runs only once when the component is mounted

    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the next page after 3 seconds (if needed)
            navigate('/next-page');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="payment-container">
            <div className="circle">
                <div className="tick-mark">&#10003;</div>
            </div>
            <div className="animated-elements">
                <span className="star star1"></span>
                <span className="star star2"></span>
                <span className="line line1"></span>
                <span className="line line2"></span>
            </div>
            <h1 className="payment-success-text">Payment Successful</h1>
        </div>
    );
}

export default PaymentSuccess;
