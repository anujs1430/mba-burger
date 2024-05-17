import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";

const Box = ({ value, title }) => {
  return (
    <div>
      {title === "Income" ? "₹" : ""}
      <h3 style={{ display: "contents" }}>{value}</h3>
      <p>{title}</p>
    </div>
  );
};

ChartJS.register(Tooltip, ArcElement, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: " # of Orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159, 63, 176, 0.1)",
          "rgba(78,63,176, 0.2)",
          "rgba(156, 0, 60, 0.3)",
        ],
        borderColor: [
          "rgb(159, 63, 176)",
          "rgb(78,63,176)",
          "rgb(156, 0, 60,)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
      <main>
        <article>
          <Box title={"Users"} value={123} />
          <Box title={"Orders"} value={13} />
          <Box title={"Income"} value={12313} />
        </article>

        <section>
          <div>
            <Link to={"/admin/orders"}>View Orders</Link>
            <Link to={"/admin/users"}>View Users</Link>
          </div>

          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
