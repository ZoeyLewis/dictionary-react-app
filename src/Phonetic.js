import React from "react";
import "./Phonetics.css";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="/">Listen 📣</a>
            <div className="phoneticText">{props.phonetic.text}</div>
        </div>
    )
}