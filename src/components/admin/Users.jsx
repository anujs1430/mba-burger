import React from "react";

const founder =
  "https://media.istockphoto.com/id/475060896/photo/goofy-young-man.jpg?s=612x612&w=0&k=20&c=pw3dLyNlRbsWuC2W8nikBuZ86Lar2O4mr_-4LmEXrfI=";

const Order = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="table-class founder-section">
      <main>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Roll</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#1</td>
                <td>Anuj</td>
                <td>
                  <img className="founder-img" src={founder} alt="" />
                </td>
                <td>Admin</td>
                <td>{"10-10-2022"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Order;
