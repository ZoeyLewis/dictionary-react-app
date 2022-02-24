import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary() {
    let [word, setWord] = useState("")

function handleResponse(response){
    console.log(response.data[0])
}

   function search(event){
       event.preventDefault()
       alert (`${word}`)
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
       axios.get(apiUrl).then(handleResponse)
   } 
function handleWord(event){
setWord(event.target.value)
}
    return (
    <form className="SearchForm" onSubmit={search}>
      <input type="search" placeholder="Search for a word" onChange={handleWord}/>
    <button type="submit">Submit</button>
  </form>
  )
}