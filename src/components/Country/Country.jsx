/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  // console.log(country);
  const { name, flags, area, population, cca3 } = country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>Name: {name.common}</h2>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
    </div>
  );
};

export default Country;
