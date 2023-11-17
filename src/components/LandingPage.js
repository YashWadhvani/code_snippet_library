import React from "react";
import { Container } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div>
      <Container className="heroToast bg-dark">
        <div>
          <img
            src="../img/Sprites/background.png"
            alt="Code Snippet"
            className="heroImg"
          />
        </div>
        <div className="heroText">
          <p className="code">
            This website aims to help all the developers, be it newbies or
            experts to get all the basic and Frequently Used Code Snippets in
            one place.
          </p>
        </div>
      </Container>
    </div>
  );
}
