import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from "react-router-dom";

const Orders = () => {
  const arr = [1, 2, 3, 4];
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
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#1</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹ 1000</td>
                <td>COD</td>
                <td>anuj</td>
                <td>
                  <Link to={`/order/${"abc"}`}>
                    <AiOutlineEye />
                  </Link>

                  <button>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
