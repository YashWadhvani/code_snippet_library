import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navibar() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container className="navContainer">
          <Navbar.Brand href="/" className="text-white ">
            <img
              src="../img/Logos/Brand/logo-white.svg"
              alt="Code Snippet Library"
              className="brandLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navLinksContainer ms-auto">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="/library" className="text-white">
                Snippets
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
