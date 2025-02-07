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
      .get(`${process.env.API_URL}/snippets`)
      .then((response) => {
        setSnippet(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSnippetView = async (snippetId) => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}/snippets/${snippetId}/increment`
      );
      if (response.status === 200) {
        // Update the snippet count in the local state
        const updatedSnippets = snippets.map((snippet) => {
          if (snippet._id === snippetId) {
            return { ...snippet, snippetCount: snippet.snippetCount + 1 };
          }
          return snippet;
        });
        setSnippet(updatedSnippets);
      }
    } catch (error) {
      console.error("Error incrementing snippet count:", error);
    }
  };

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
                key={snippet._id}
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
                  onClick={() => handleSnippetView(snippet._id)}
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
          return null; // Make sure to return null if condition doesn't match to avoid React warnings
        })}
      </Container>
    </div>
  );
}
