import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [word, setWord] = useState("")
   function search(event){
       event.preventDefault()
       alert (`${word}`)
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