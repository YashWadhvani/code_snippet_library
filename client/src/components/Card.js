import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div class="MyCard">
      <img src={props.imgSrc} alt="" class="cardImg" />
      <div class="cardBody">
        <p class="cardTitle">{props.title}</p>
        <p class="cardInfo">{props.info}</p>
        <div class="cardBtn">
          <Link to={props.destPage}>
            <img
              src={process.env.PUBLIC_URL + "/img/Sprites/right-arrow.png"}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
