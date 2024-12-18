const mongoose=require("mongoose")
const Order = require('../Models/OrderModel');
const Agent = require('../Models/AgentModel');
const { getBookingData, removeBookingData }=require("../Models/bookingDataStore")
const postOrderDetails = async (req, res) => {
    const { bookingData } = req.body;

    // Validate the sessionId input
    // if (!sessionId) {
    //     return res.status(400).json({ message: 'Session ID is required.' });
    // }

     if (!bookingData) {
         return res.status(400).json({ message: 'Booking data is required.' });
     }else {
    console.log("booking data received : " ,bookingData)
}
    const { formData, packageDetails, userEmail } = bookingData;
//    console.log(getBookingData(sessionId))

    if (!formData || !packageDetails || !userEmail) {
        return res.status(400).json({
            message: 'Missing required fields: formData, packageDetails, or userEmail'
        });
    }

    try {
        // Check if an order with the same sessionId or formData already exists
        const existingOrder = await Order.findOne({
            userEmail: userEmail,
            "packageDetails.packageName": packageDetails.packageName,
            "packageDetails.status": "ongoing" // Optional: Check only for ongoing orders
        });

        if (existingOrder) {
            return res.status(409).json({ message: 'Order already exists with the same package for this user.' });
        }

        // Find a free agent
        const agents = await Agent.findOneAndUpdate(
            { status: 'free' },
            { status: 'busy' },
            { new: true }
        );

        if (!agents) {
            return res.status(400).json({ message: 'No free agents available' });
        }

        // Create the order data
        const BookingData = {
            order_id: new mongoose.Types.ObjectId(),
            formData,
            packageDetails: {
                packageName: packageDetails.packageName,
                category: packageDetails.category,
                status: "ongoing",
                vendors: packageDetails.vendors.map(vendor => ({
                    ...vendor,
                    status: "pending"
                })),
                price: packageDetails.price,
            },
            userEmail: userEmail,
            agents: {
                agent_id: agents.agent_id,
                name: agents.name,
                email: agents.email,
                phone_number: agents.phone_number,
            },
        };

        // Save the new order
        const newOrder = new Order(BookingData);
        //removeBookingData(sessionId); 
        await newOrder.save();
       // Remove booking data after processing

        res.status(201).json({ message: 'Order submitted successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};




const fetchOrderDetails = async (req, res) => {
    try {
        const order = await Order.find({ userEmail: req.params.email });
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.json(order);
        console.log(order)
        
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const AgentfetchOrderDetails = async (req, res) => {
    try {
        const email = req.params.email;
        const order = await Order.find({ "agents.email": email });

        // If no matching orders are found, return a 404 response
        if (order.length === 0) {
            return res.status(404).send('Order not found');
        }

        res.json(order); // Send the found orders
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server error');
    }
};

const UpdateServiceStatus = async (req, res) => {
    const { email, vendorName, status } = req.body;

    try {
        // Find the order with the given email and vendorName, and update the vendor's status
        const updatedOrder = await Order.findOneAndUpdate(
            { 
                "agents.email": email, 
                "packageDetails.vendors": { $elemMatch: { service: vendorName } }
            },
            { 
                $set: { "packageDetails.vendors.$.status": status }
            },
            { new: true } // Return the updated document
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order or Vendor not found' });
        }

        // Log updatedOrder to see its structure
        console.log(updatedOrder);

        // Get the agent's email; adjust based on the structure of agents
        let agentEmail;
        if (Array.isArray(updatedOrder.agents)) {
            agentEmail = updatedOrder.agents.find(agent => agent.email === email)?.email;
        } else {
            agentEmail = updatedOrder.agents.email; // Adjust based on actual structure
        }

        // Check if all vendors have the status 'completed'
        const allVendorsCompleted = updatedOrder.packageDetails.vendors.every(vendor => vendor.status === 'completed');

        // If all vendors are completed, update the agent's status to 'free'
        if (allVendorsCompleted && agentEmail) {
            // Update the agent's status to 'free' in the agent collection
            await Agent.findOneAndUpdate(
                { email: agentEmail }, 
                { $set: { status: 'free' } }
            );

            // Update the package details status if necessary
            await Order.findOneAndUpdate(
                { "agents.email": agentEmail }, 
                { $set: { "packageDetails.status": 'completed' } } // Assuming packageDetails has a status field
            );
        }

        return res.status(200).json({ message: 'Status updated successfully' });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};





module.exports= {postOrderDetails,fetchOrderDetails,AgentfetchOrderDetails,UpdateServiceStatus}
