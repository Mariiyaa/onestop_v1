const stripe = require('stripe')('sk_test_51PhB4JA4YDBsTrPZrPWTuHlbVbkLMblMpv27HDCK9g11nhYyyreUhu9X1yWafZRU8tJC1vItngshMC8F6Bff5Q8R00h8YHyby2');

const { addBookingData }=require('../Models/bookingDataStore')


// Payment controller function
const createPaymentSession = async (req, res) => {
    const { package: pkg, bookingData } = req.body; // Extract package and bookingData from request body

    try {
        // Validate input data
        if (!pkg || !bookingData) {
            return res.status(400).json({ error: 'Package and booking data are required.' });
        }
        else {
            console.log("booking fetched ",bookingData)
        }

        // Create a product using package name
        const product = await stripe.products.create({
            name: pkg.name,
        });

        // Create a price using package price
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: pkg.price * 100, // Convert INR to paise
            currency: 'inr',
        });

        // Create a checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: 'http://localhost:3000/cancel',
            customer_email: 'demo@gmail.com', // Optional: Use the user's email if you have it
        });
        console.log("booking fetched ",bookingData)
        // Store booking data with the session ID
        // addBookingData(session.id, bookingData); // Ensure booking data is stored correctly
        // console.log('Stored booking data for session:', session.id, bookingData); // Log for debugging

        // Respond with the session URL
        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createPaymentSession };


