import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js"

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState (null);

function handleResponse(response){
    setResults(response.data[0]);
}
function handlePexelsResponse(response){
    setPhotos(response.data.photos)
}

   function search(){
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
       axios.get(apiUrl).then(handleResponse)

       let pexelsApiKey = `563492ad6f917000010000019d3eca27583746f8b3d05deab3406298`
       let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`
       axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse);
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
      <input type="search" placeholder={props.defaultWord} onChange={handleWord}/>
    <button type="submit">Submit</button>
  </form>
  <Results results={results}/>
  <Photos photos={photos}/>
  </div>
  );}
  else {
    load()
      return "Loading"
  }
}
