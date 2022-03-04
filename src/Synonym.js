import React from "react";
import "./Synonym.css"

export default function Synonym(props){
    if (props.synonyms){
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function(synonyms, index){
                    return <li key={index}>{synonyms}</li>;  
                })}
            </ul>
        );
             } else {
            return null;
        }
    };