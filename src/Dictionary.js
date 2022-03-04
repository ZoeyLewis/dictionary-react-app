import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results.js"

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState (false);

function handleResponse(response){
    setResults(response.data[0]);
}

   function search(){
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
       axios.get(apiUrl).then(handleResponse)
   } 
function handleWord(event){
setWord(event.target.value)
}

function handleSubmit(event){
    event.preventDefault();
    search()
}

function load(){
    setLoaded(true);
    search();
}

if (loaded){
    return (
        <div>
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input type="search" placeholder="Search for a word" onChange={handleWord}/>
    <button type="submit">Submit</button>
  </form>
  <Results results={results}/>
  </div>
  );}
  else {
    load()
      return "Loading"
  }
}
