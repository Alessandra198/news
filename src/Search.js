import React, { useState } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

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
    console.log(response.data);
    setData(response.data);
  }
  if (loaded) {
    return "Hello";
  } else {
    return (
      <div>
        <h4>Loading...</h4>

        <PacmanLoader color="#36d7b7" />
      </div>
    );
  }
}
