import React, { useState } from 'react';

const Payment = (props) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Function to handle the payment submission
  const handlePaymentSubmit = async () => {
    // Send a request to your backend to initiate the Paytm payment
    try {
      const response = await fetch('/api/initiatePayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: props.price, // Pass the price from props
        }),
      });

      if (response.ok) {
        // The payment request was successful
        const paymentData = await response.json();

        // Redirect the user to the Paytm payment page
        window.location.href = paymentData.paymentUrl;
      } else {
        // Handle the error case
        console.error('Error initiating payment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='py-10'>
      <h3>Payment form here..</h3>
      <button onClick={handlePaymentSubmit}>Make Payment</button>
      {paymentStatus && <p>Payment Status: {paymentStatus}</p>}
    </div>
  );
};

export default Payment;
