const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of String
        required: true,
        unique: true
      },
    formData: {
        type: Object,
        required: true,
    },
    packageDetails: {
        packageName: { type: String, required: true },
        category: { type: String, required: true },
        status:{ type: String, required: true },
        vendors: { type: Array, required: true },
        price:{type:Number,required:true}
    },
    userEmail: { type: String, required: true },
    agents: {
        agent_id: { type: String, ref: 'agents' },
        name: { type: String },
        email: { type: String },
        phone_number: {type: String}
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);