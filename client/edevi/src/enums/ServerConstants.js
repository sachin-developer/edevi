// Define at one place so it's easy to swap in production env.
const urlBase = 'https://fast-shore-71647.herokuapp.com/';

const serverConstants = {
    orderIdFetch: dbBase + '/api/razorpay',
    paymentCodeVerification: dbBase + '/api/codeverification'
};

module.exports = {
    serverConstants: serverConstants
}