// Define at one place so it's easy to swap in production env.
const urlBase = 'http://localhost:5000';

const serverConstants = {
    orderIdFetch: urlBase + '/api/razorpay'
};

module.exports = {
    serverConstants: serverConstants
}