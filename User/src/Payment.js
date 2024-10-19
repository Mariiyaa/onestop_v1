import React,{useState} from 'react';
import axios from 'axios';
import './PaymentPage.css'
import { useLocation } from 'react-router-dom';

function Payment() {
    const location = useLocation();
    const { bookingData } = location.state || {}; 
    const [loading, setLoading] = useState(false); // Retrieve booking data from the previous component

    if (!bookingData) {
        return <div>Error: No package details found.</div>; // Error handling for missing booking data
    }

    const buyFunction = async () => {
        try {
            if (loading) return; // Prevent further clicks if already loading
    setLoading(true); //
            // Store the booking data in local storage before payment
            localStorage.setItem('bookingData', JSON.stringify(bookingData));
            console.log('Stored Booking Data:', bookingData); // Log stored data for debugging

            const response = await axios.post('/payment', {
                package: {
                    name: bookingData.packageDetails.packageName, // Send package name
                    price: bookingData.packageDetails.price / 2, // Send 50% of the package price
                },
                bookingData,
            });

            if (response.status === 200) {
                // Redirect to Stripe Checkout URL
                window.location.href = response.data.url;
            }
        } catch (error) {
            console.error('Error processing payment:', error.response ? error.response.data : error.message);
        }
    };
    
    return (
        <div className='payment'>
        <div class="booking-container">
        <h1 class="booking-title">Book your package now</h1>
        <h3 class="package-name">{bookingData.packageDetails.packageName}</h3>
        <p class="amount">Amount: ₹{(bookingData.packageDetails.price / 2).toFixed(2)}</p>
        <button class="pay-button" onClick={buyFunction} disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now'}
        </button>
    </div>
    </div>
    
    );
}

export default Payment;
