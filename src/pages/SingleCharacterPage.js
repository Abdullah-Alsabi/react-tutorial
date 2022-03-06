import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyCard from "../componets/MyCard";
import "../App.css";
export default function DetailsPage() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/" + id;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="details-continer">
      <MyCard data={character} />{" "}
    </div>
  );
}
