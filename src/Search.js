import React, { useState } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import News from "./News";
import "./Search.css";

export default function Search() {
  let [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function searchNews() {
    let apiKey = "cofd1t9r01qk1gt8dkpgcofd1t9r01qk1gt8dkq0";
    let apiUrl = `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    setLoaded(true);
  }
  function handleResponse(response) {
    setData(response.data);
  }
  if (loaded) {
    return (
      <div>
        <News data={data} />
      </div>
    );
  } else {
    searchNews();
    return (
      <div className="Search">
        <h3>Loading...</h3>
        <PacmanLoader color="#FFCE08" size={50} className="pacman" />
      </div>
    );
  }
}
