// bookingDataStore.js

const bookingDataStore = {}; // In-memory store

const addBookingData = (sessionId, data) => {
    bookingDataStore[sessionId] = data;
};

const getBookingData = (sessionId) => {
    return bookingDataStore[sessionId];
    console.log( bookingDataStore,)
};

const removeBookingData = (sessionId) => {
    delete bookingDataStore[sessionId];
};

module.exports = {
    addBookingData,
    getBookingData,
    removeBookingData,
};
