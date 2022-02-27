import React, { useState } from "react";
import "./search.css";

function Search({ toggleDisplay }) {
  const [city, setCity] = useState("");

  return (
    <div className="search">
      <div className="heading">
          {/* <img src={logo} alt="logo"></img> */}
          <h1>Weather App</h1>
      </div>
      <p>Find the Weather of your City</p>
      <input
        type="text"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button type="submit" onClick={() => {toggleDisplay(city)}}>
        Search
      </button>

    </div>
  );
}

export default Search;


