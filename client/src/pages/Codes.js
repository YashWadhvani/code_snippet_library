import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <h1 className="text-white">Codes for {id.toUpperCase()}</h1>

      <p className="text-white">
        {snippets.map((snippet) => {
          const url = snippet.sourceCode;
          const arr = url.split("/");
          const fileName = arr[arr.length - 1];
          if (id === snippet.language.toLowerCase()) {
            return (
              <p>
                <a
                  href={process.env.PUBLIC_URL + snippet.imageUrl}
                  target="blank"
                >
                  {snippet.title}
                </a>
                , {snippet.language},{snippet.description},
                {process.env.PUBLIC_URL + snippet.imageUrl},
                <a
                  href={process.env.PUBLIC_URL + snippet.sourceCode}
                  download={fileName}
                >
                  Download
                </a>
              </p>
            );
          }
        })}
      </p>
    </div>
  );
}
