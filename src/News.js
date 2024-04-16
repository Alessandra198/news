import React from "react";

export default function News(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="News">
        {props.data.map(function (element, index) {
          return (
            <div key={index}>
              <h4>{element.headline}</h4>
              <p>{element.summary} </p>
              <a href={element.url}>Click here for more info</a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
