import React from "react";

export default function Phonetic(props){
    return (
        <div className="Phoetic">
            <a href={props.phonetic.audio} target="/">Listen</a>
            <div>{props.phonetic.text}</div>
        </div>
    )
}