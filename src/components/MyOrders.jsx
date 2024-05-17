import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <section className="table-class">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr>
                <td>#1</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹ 1000</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${"abc"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
