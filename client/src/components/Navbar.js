import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

export default function Navibar() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container className="navContainer">
          <Navbar.Brand className="text-white ">
            <Link to="/">
              <img
                src="../img/Logos/Brand/logo-white.svg"
                alt="Code Snippet Library"
                className="brandLogo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navLinksContainer ms-auto">
              <Nav className="text-white">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav>
              {/* <Nav.Link className="text-white nav-link" href="../#LangSelectHead">
                Snippets
              </Nav.Link> */}
              <Nav className="text-white">
                <Link to="/select" className="nav-link">
                  Snippets
                </Link>
              </Nav>
              <Nav className="text-white">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </Nav>
              <Nav className="text-white">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLogin && <Login onClose={toggleLogin} />}
    </>
  );
}
