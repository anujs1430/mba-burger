import React from "react";

const ConfirmOrder = () => {
  return (
    <section className="confirm-Order">
      <main>
        <h1>Confirm Order</h1>
        <form action="">
          <div>
            <label htmlFor="cashDelivery">Cash On Delivery</label>
            <input type="radio" name="payment" id="cashDelivery" />
          </div>
          <div>
            <label htmlFor="online">Online</label>
            <input type="radio" name="payment" id="online" />
          </div>

          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
