import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      const states = State.getStatesOfCountry(selectedCountry);
      setStates(states);
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

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
            <label htmlFor="country">Country</label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="" disabled>
                Choose Your Country
              </option>
              {Country.getAllCountries().map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select id="state" disabled={!selectedCountry}>
              <option value="" disabled>
                Choose Your State
              </option>
              {states.map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
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
