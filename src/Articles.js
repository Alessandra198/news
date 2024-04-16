import React from "react";
import "./Articles.css";

export default function Articles(props) {
  if (props.element.image) {
    return (
      <div className="Articles">
        <div className="row">
          <div className="col-6">
            <h6>{props.element.headline}</h6>
            <p>{props.element.summary}</p>
          </div>
          <div className="col-6">
            {" "}
            <a href={props.element.url}>
              <img
                src={props.element.image}
                alt="article"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
