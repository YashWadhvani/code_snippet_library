import React from "react";
import { useParams } from "react-router-dom";

export default function Codes() {
  let { id } = useParams();
  return (
    <div>
      <h1 className="text-white">Codes for {id.toUpperCase()}</h1>
    </div>
  );
}
