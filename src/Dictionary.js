import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results.js"

export default function Dictionary() {
    let [word, setWord] = useState("");
    let [results, setResults] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

   function search(event){
       event.preventDefault()
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
       axios.get(apiUrl).then(handleResponse)
   } 
function handleWord(event){
setWord(event.target.value)
}
    return (
        <div>
    <form className="SearchForm" onSubmit={search}>
      <input type="search" placeholder="Search for a word" onChange={handleWord}/>
    <button type="submit">Submit</button>
  </form>
  <Results results={results}/>
  </div>
  );
}
