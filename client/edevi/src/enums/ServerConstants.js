// Define at one place so it's easy to swap in production env.
const urlBase = 'https://fast-shore-71647.herokuapp.com/';
const clientUrlBase = 'localhost:3000';

const serverConstants = {
    clientUrlBase: clientUrlBase,
    orderIdFetch: urlBase + '/api/razorpay',
    paymentCodeVerification: urlBase + '/api/codeverification'
};

module.exports = {
    serverConstants: serverConstants
}