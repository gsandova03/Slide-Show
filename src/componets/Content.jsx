import React from 'react'

export default function Contenido({title, text}){
    return(
        <div className="diapositiva">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}