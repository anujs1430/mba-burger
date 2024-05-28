import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <section className="not-found">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>

        <p>Page not found, Click below to go to Home page</p>
        <Link to={"/"}>Go To Home</Link>
      </main>
    </section>
  );
};

export default Notfound;
