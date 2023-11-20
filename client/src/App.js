import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Snippets from "./pages/Snippets";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Codes from "./pages/Codes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/select" element={<Snippets />} />
        <Route exact path="/snippets/:id" element={<Codes />} />
      </Routes>
    </>
  );
}

export default App;
