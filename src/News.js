import React from "react";
import Articles from "./Articles";

export default function News(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="News">
        {props.data.map(function (element, index) {
          return (
            <div key={index}>
              <Articles element={element} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
