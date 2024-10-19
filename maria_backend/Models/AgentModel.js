const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    agent_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Email validation
    },
    password : {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        match: /^\+?[0-9\-]+$/ // Phone number validation (international format)
    },
    status: {
        type: String,
        required: true,
        enum: ['busy', 'free'] // Limits the status to 'busy' or 'free'
    }
});

module.exports = mongoose.model('agents', agentSchema);
