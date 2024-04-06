import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Snippets from "./pages/Snippets";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Codes from "./pages/Codes";
import axios from "axios";
import Login from "./pages/Login";

function App() {
  const executePythonScript = () => {
    axios
      .post("/execute-python-script")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/select" element={<Snippets />} />
        <Route exact path="/snippets/:id" element={<Codes />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default App;
