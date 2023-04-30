import React, { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div className="design">
      {country?.map((single) => (
        <h2 key={single.cca2}>
          {single?.name?.common} <br />
          <span className="capital">{single?.capital}</span>
        </h2>
      ))}
    </div>
  );
};

export default Countries;
