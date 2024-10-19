import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useData } from '../UserData';
import '../Style/YourBooking.css';

const YourBooking = () => {
    const [orderData, setOrderData] = useState([]);
    const { Data } = useData();
    console.log(Data.email);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await axios.get(`/fetchOrderDetails/${Data.email}`);
                console.log(response.data);
                if (response.data.length > 0) {
                    setOrderData(response.data);
                }
            } catch (error) {
                console.error('Error fetching the order data:', error);
            }
        };

        fetchOrderData();
    }, [Data.email]);

    if (orderData.length === 0) {
        return <div style={{padding:"100px",height:"100vh",backgroundColor:"#fffbeedc"}}><h1>No orders found</h1></div>;
    }

    return (
        <div className='booking'>
            <h1>YOUR BOOKINGS</h1>
            {orderData.map((order, index) => (
                <div key={index} className='order-section'>
                    <div className='package-agent'>
                        <div>
                            <h3>Package Details:</h3>
                            <p><strong>Order id:</strong> {order.order_id}</p>
                            <p><strong>Package Name:</strong> {order.packageDetails.packageName}</p>
                            <p><strong>Category:</strong> {order.packageDetails.category}</p>
                            <p><strong>Status:</strong> {order.packageDetails.status}</p>
                        </div>
                        <div className='agent'>
                            <h3>Agent Details:</h3>
                            <p><strong>Agent ID:</strong> {order.agents.agent_id}</p>
                            <p><strong>Name:</strong> {order.agents.name}</p>
                            <p><strong>Email:</strong> {order.agents.email}</p>
                            <p>
    <strong>Phone No:</strong> <a href={`https://wa.me/${order.agents.phone_number}`} target="_blank" rel="noopener noreferrer" className="whatsapp-icon">{order.agents.phone_number}</a>
</p>
                        </div>
                        <button
      style={{
        backgroundColor: '#4CAF50', // Green background
        color: 'white',              // White text
        padding: '5px 32px',       // Padding
        textAlign: 'center',         // Centered text
        textDecoration: 'none',      // No underline
        display: 'inline-block',     // Inline block
        fontSize: '16px',            // Font size
        height:'80px',
        cursor: 'pointer',           // Pointer cursor on hover
        border: 'none',              // No border
        borderRadius: '4px'          // Rounded corners
      }} 
    >
      Pay remaining amount
    </button>
                    </div>
                    <div className='vendor-section'>
                        {order.packageDetails.vendors.map((vendor, vendorIndex) => (
                            <div key={vendorIndex} className='booking-vendor-category-section'>
                                <h3>{vendor.service}</h3>
                                <div className='booking-vendor-card-section'>
                                    {vendor.selectedVendors.map((v, i) => (
                                        <div key={i} className='booking-vendor-card'>
                                            <h5>Preference: {i + 1}</h5>
                                            <p><strong>Name:</strong> {v.name}</p>
                                            <p><strong>Contact:</strong> {v.contact}</p>
                                            <p><strong>Address:</strong> {v.address}</p>
                                            {/* <img src={v.image_url} alt={v.name} style={{ width: '100px' }} /> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default YourBooking;
