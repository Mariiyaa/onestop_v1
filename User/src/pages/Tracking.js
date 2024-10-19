import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useData } from '../UserData';
import '../Style/YourBooking.css';

const Tracking= () => {
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
            <h1>Order Tracking</h1>
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
                    </div>
                    <div className='vendor-section'>
                        {order.packageDetails.vendors.map((vendor, vendorIndex) => (
                            <div key={vendorIndex} className='booking-vendor-category-section'>
                                <h3>{vendor.service}</h3>
                                <h3>Status : {vendor.status}</h3>
                            </div>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Tracking;
