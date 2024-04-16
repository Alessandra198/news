import React, { useState } from "react";

export default function Search() {
  let apiKey = "cofd1t9r01qk1gt8dkpgcofd1t9r01qk1gt8dkq0";
  let apiUrl = `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
  }
  return "Hello";
}
