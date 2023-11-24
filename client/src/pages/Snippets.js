// A Page to display Snippets. It will take props from the Route and show snippets from that programming language only.

import React from "react";
import { Container } from "react-bootstrap";
import Card from "../components/Card";
// import { Navigate, useParams } from "react-router-dom";

export default function Snippets() {
  // let { id } = useParams();
  return (
    <>
      <h1 className="LangSelectHead">Select a Language</h1>
      <Container className="Languages">
        <Card
          title="C"
          info="Usefull Snippets in C Programming Language"
          imgSrc="./img/Logos/Languages/c.png"
          destPage="/snippets/c"
        />
        <Card
          title="C++"
          info="Usefull Snippets in C++ Programming Language"
          imgSrc="./img/Logos/Languages/c++.png"
          destPage="/snippets/c++"
        />
        <Card
          title="Python"
          info="Usefull Snippets in Python Programming Language"
          imgSrc="./img/Logos/Languages/python.png"
          destPage="/snippets/python"
        />
        <Card
          title="JavaScript"
          info="Usefull Snippets in JavaScript Programming Language"
          imgSrc="./img/Logos/Languages/js.png"
          destPage="/snippets/js"
        />
      </Container>
    </>
  );
}
