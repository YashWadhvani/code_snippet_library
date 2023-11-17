import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <img src={props.imgSrc} alt="" class="card-img" />
      <div class="card-body">
        <p class="card-title">{props.title}</p>
        <p class="card-info">{props.info}</p>
        <div class="cardbtn">
          <a href={props.destPage}>
            <img
              src={process.env.PUBLIC_URL + "/img/Sprites/right-arrow.png"}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
