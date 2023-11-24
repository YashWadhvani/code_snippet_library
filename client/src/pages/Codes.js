import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button, Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa6";

export default function Codes() {
  let { id } = useParams();
  const [snippets, setSnippet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/snippets")
      .then((snippets) => {
        setSnippet(snippets.data);
        console.log(snippets.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1 className="text-white text-capitalize">Codes for {id}</h1>

      <Container className="d-flex justify-content-center align-items-center flex-wrap">
        {snippets.map((snippet) => {
          const url = snippet.sourceCode;
          const arr = url.split("/");
          const fileName = arr[arr.length - 1];
          if (id === snippet.language.toLowerCase()) {
            return (
              <Card
                style={{ width: "24rem", height: "18rem" }}
                className="m-3 justify-content-center align-items-center p-2 text-center text-capitalize bg-dark-subtle text-bg-dark-subtle border-2"
              >
                <Card.Title>{snippet.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Language Used : {snippet.language}
                </Card.Subtitle>
                <Card.Text>{snippet.description}</Card.Text>
                <Button
                  href={process.env.PUBLIC_URL + snippet.imageUrl}
                  target="_blank"
                  className="mt-1 mb-2 bg-dark border-dark"
                >
                  View Snippet
                </Button>
                <Button
                  href={process.env.PUBLIC_URL + snippet.sourceCode}
                  download={fileName}
                  className="mt-2 mb-1 bg-dark border-dark"
                >
                  <FaDownload className="me-1 mt-auto" />
                  Download Source Code File
                </Button>
              </Card>
            );
          }
        })}
      </Container>
    </div>
  );
}
