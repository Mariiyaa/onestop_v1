import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useData } from './AgentData';
import './style/OrderPage.css';

const OrderPage = () => {
    const [orderData, setOrderData] = useState([]);
    const { Data } = useData();
    const [buttonLabels, setButtonLabels] = useState({});

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                console.log('Email before fetching:', Data.email);
                const response = await axios.get(`/AgentfetchOrderDetails/${Data.email}`);
                console.log(response.data);
                if (response.data.length > 0) {
                    setOrderData(response.data);

                    const savedLabels = JSON.parse(localStorage.getItem('buttonLabels')) || {};
                    const initialLabels = {};

                    response.data.forEach((order, orderIndex) => {
                        order.packageDetails.vendors.forEach((vendor, vendorIndex) => {
                            const key = `${Data.email}-${order.order_id}-${orderIndex}-${vendorIndex}`;
                            initialLabels[key] = savedLabels[key] || 'Pending';
                        });
                    });

                    setButtonLabels(initialLabels);
                }
            } catch (error) {
                console.error('Error fetching the order data:', error, Data.email);
            }
        };

        fetchOrderData();
    }, [Data.email]);

    const handleButtonClick = async (key, vendorName) => {
        const newStatus = 'completed';
        const email = Data.email;

        try {
            const response = await axios.post('/updateServiceStatus', {
                email,
                vendorName,
                status: newStatus,
            });

            console.log('Status updated:', response.data);

            setButtonLabels((prevLabels) => {
                const updatedLabels = {
                    ...prevLabels,
                    [key]: newStatus,
                };
                localStorage.setItem('buttonLabels', JSON.stringify(updatedLabels));
                return updatedLabels;
            });
        } catch (error) {
            console.error('Error updating service status:', error);
        }
    };

    if (orderData.length === 0) {
        return <div>No orders found : {Data.email}</div>;
    }

    return (
        <div className='booking'>
            {orderData.map((order, orderIndex) => (
                <div key={orderIndex} className='order-section'>
                    <div className='package-agent'>
                        <div>
                            <h3>Package Details:</h3>
                            <p><strong>Order id:</strong> {order.order_id}</p>
                            <p><strong>Package Name:</strong> {order.packageDetails.packageName}</p>
                            <p><strong>Category:</strong> {order.packageDetails.category}</p>
                            <p><strong>Status:</strong> {order.packageDetails.status}</p>
                        </div>
                        <div className='agent'>
                            <h3>Customer Details:</h3>
                            <p><strong>Customer Name:</strong> {order.formData.name}</p>
                            <p><strong>Contact:</strong> {order.formData.contact}</p>
                            <p><strong>Event Date:</strong> 
                                {order.formData && order.formData.date 
                                    ? new Date(order.formData.date).toLocaleDateString() 
                                    : 'Date not available'}
                            </p>
                            <p><strong>No. of guests:</strong> 
                                {order.formData && order.formData.guests != null 
                                    ? order.formData.guests 
                                    : 'Guests not available'}
                            </p>
                        </div>
                    </div>
                    <div className='vendor-section'>
                        {order.packageDetails.vendors.map((vendor, vendorIndex) => {
                            const key = `${Data.email}-${order.order_id}-${orderIndex}-${vendorIndex}`;
                            return (
                                <div key={vendorIndex} className='booking-vendor-category-section'>
                                    <h3>{vendor.service}</h3>
                                    <div className='booking-vendor-card-section'>
                                        {vendor.selectedVendors.map((v, i) => (
                                            <div key={i} className='booking-vendor-card'>
                                                <h5>Preference: {i + 1}</h5>
                                                <p><strong>Name:</strong> {v.name}</p>
                                                <p><strong>Contact:</strong> {v.contact}</p>
                                                <p><strong>Address:</strong> {v.address}</p>
                                            </div>
                                        ))}
                                        {buttonLabels[key] === 'completed' ? (
                                            <h4>Completed</h4>
                                        ) : (
                                            <button
                                                onClick={() => handleButtonClick(key, vendor.service)}
                                                className={buttonLabels[key] === 'completed' ? 'completedStyle' : ''}
                                            >
                                                {buttonLabels[key] || 'Pending'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default OrderPage;
