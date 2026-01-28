import React from "react";
import axios from "axios";

const Razorpage = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Create an order from backend
      const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: 100, // Amount in INR
      });

      const options = {
        key: "your_razorpay_key",
        amount: 100 * 100, // Amount in paise
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: data.orderId, // Order ID from backend
        handler: async (response) => {
          console.log("Payment Successful", response);
          // Here you can call another API to verify payment at the backend
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Razorpage;
