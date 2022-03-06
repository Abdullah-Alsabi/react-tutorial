import React, { useState } from "react";

export default function Converter() {
  const [Celsius, setCelsius] = useState(0);
  const [Fahrenheit, setFahrenheit] = useState(0);

  function convCtoF(e) {
    let c = e.target.value;
    setCelsius(c);
    setFahrenheit(c * (9 / 5) + 32);
  }
  function convFtoC(e) {
    let f = e.target.value;
    setFahrenheit(f);
    setCelsius((f - 32) * (5 / 9));
  }
  return (
    <>
      <div>
        <h2 style={{ margin: " 0 auto 0 0" }}>Enter temperature in Celsius:</h2>
        <input
          onChange={convCtoF}
          type="number"
          value={Celsius}
        ></input>
      </div>
      <div>
        <h2 style={{ margin: " 0 auto  0 0" }}>
          Enter temperature in Fahrenheit:
        </h2>
        <input
          onChange={convFtoC}
          type="number"
          value={Fahrenheit}
        ></input>
      </div>
    </>
  );
}
