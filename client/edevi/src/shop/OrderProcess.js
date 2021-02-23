import React, { Component } from "react";
import ShoppingCartUtils from './ShoppingCartUtils';



function OrderProcess(props) {
    let itemDetails = ShoppingCartUtils.getLocalStorageItems();
    let totalAmount = ShoppingCartUtils.getCartPrice();
    let serverPayLoad = JSON.stringify({itemDetails, totalAmount});
    let [orderId, setOrderId] = React.useState(null);

    function onSuccess(response) {
    }


    props.handleRequestToServer({
        onSuccessHandler: (response) => {onSuccess},
        methodType: 'POST',
        endPoint: 'orderIdFetch',
        data: serverPayLoad,
    })
    if (orderId !== null) {
        var options = {
            "key": "", // Enter the Key ID generated from the Dashboard
            "amount": totalAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "EDevi",
            "description": "",
            // "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/", // Route to success page
            "prefill": {
                "name": "",
                "email": "",
                "contact": ""
            },
            "notes": {
                "address": ""
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        rzp1.on('payment.failed', function (response){


            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
        });
    }

    return (
        <div />
    )
}

export default OrderProcess;