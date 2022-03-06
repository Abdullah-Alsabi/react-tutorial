import React, { useState } from "react";

export default function Counter(props) {
  const [counter, setcounter] = useState(props.init);
  return (
    <>
      <h2>Counter {counter}</h2>
      <button
        onClick={() => {
          setcounter(counter + 1);
        }}
      >
        click me
      </button>
    </>
  );
}
