import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form action="">
          <div>
            <label htmlFor="house">House No</label>
            <input type="text" id="house" placeholder="Enter House No" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Enter City" />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select id="">
              <option value="0" disabled selected>
                Choose Your Country
              </option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="">State</label>
            <select id="">
              <option value="0" disabled selected>
                Choose Your State
              </option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pin">Pin Code</label>
            <input type="text" id="pin" placeholder="Enter Pin Code" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter Phone Number" />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
