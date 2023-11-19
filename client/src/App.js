import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container className="Languages">
        <Card
          title="C"
          info="Usefull Snippets in C Programming Language"
          imgSrc="./img/Logos/Languages/c.png"
          destPage="/c"
        />
        <Card
          title="C++"
          info="Usefull Snippets in C++ Programming Language"
          imgSrc="./img/Logos/Languages/c++.png"
          destPage="/cpp"
        />
        <Card
          title="Python"
          info="Usefull Snippets in Python Programming Language"
          imgSrc="./img/Logos/Languages/python.png"
          destPage="/py"
        />
        <Card
          title="JavaScript"
          info="Usefull Snippets in JavaScript Programming Language"
          imgSrc="./img/Logos/Languages/js.png"
          destPage="/js"
        />
      </Container>
    </>
  );
}

export default App;
