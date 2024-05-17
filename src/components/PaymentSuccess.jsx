import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="payment-success">
      <main>
        <h1>Order Confirm</h1>
        <p>Order place successfully, You can check your order status below.</p>

        <Link to={"/myOrders"}>Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
