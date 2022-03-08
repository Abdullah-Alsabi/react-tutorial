import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MyCard(props) {
  let Character = props.data;
  console.log(Character);
  return (
    <Link className="Link" key={Character.id} to={"/character/" + Character.id}>
      <Card onClick={() => {}} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Character.image} />
        <Card.Body>
          <Card.Title>{Character.name}</Card.Title>
          <Card.Title>Stats: {Character.status}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
