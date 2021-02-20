import React, { Component } from "react";



function OrderProcess(props) {
 
    const itemDetails = [];
    let totalAmout = 1400;
    let serverPayLoad = JSON.stringify({itemDetails, totalAmout});
    let [orderId, setOrderId] = React.useState(null);
    // props.handleRequestToServer({
    //     onSuccessHandler: (response) => {orderId(response)},
    //     methodType: 'POST',
    //     endPoint: 'orderIdFetch',
    //     data: serverPayLoad,
    // })
    orderId=100;
    if (orderId !== null) {
        var options = {
            "key": "", // Enter the Key ID generated from the Dashboard
            "amount": totalAmout, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
                "name": "",
                "email": "",
                "contact": ""
            },
            "notes": {
                "address": "Razorpay Corporate Office"
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