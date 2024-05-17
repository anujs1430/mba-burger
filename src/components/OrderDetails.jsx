import React from "react";

const OrderDetails = () => {
  return (
    <section className="order-details">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address: </b>
            {"sadf sdf 12 afds"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name: </b>
            {"Anuj"}
          </p>
          <p>
            <b>Phone: </b>
            {987654321}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status: </b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At: </b>
            {"23-02-2020"}
          </p>
          <p>
            <b>Delivered At: </b>
            {"23-02-2021"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method: </b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference: </b>#{"123asdf"}
          </p>
          <p>
            <b>paid At: </b>
            {"23-02-2021"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total: </b>₹{"2324"}
          </p>
          <p>
            <b>Shipping charges: </b>₹{"200"}
          </p>
          <p>
            <b>Tax Charges: </b>₹{"119"}
          </p>
          <p>
            <b>Total Amount: </b>₹{2324 + 200 + 119}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{132}</span>
            </div>
          </div>

          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{222}</span>
            </div>
          </div>

          <div>
            <h4>Egg Burger</h4>
            <div>
              <span>{15}</span> x <span>{333}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{2434}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
