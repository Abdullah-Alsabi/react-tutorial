import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../componets/MyCard";
import "../App.css";
export default function Api() {
  const [carectors, setcarectors] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res.data.results);
        setcarectors(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="first-continer">
      <div className="continer">
        {carectors.map((c) => {
          return <MyCard key={c.id} data={c} />;
        })}
      </div>
    </div>
  );
}
