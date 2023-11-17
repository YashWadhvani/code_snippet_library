// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import Navibar from "./components/Navibar";
import Card from "./components/Card";
import { Container } from "react-bootstrap";

function App() {
  // const logoStyle = { width: "100px", height: "100px", margin: "5%" };
  return (
    <>
      <Navibar />
      <LandingPage />
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
