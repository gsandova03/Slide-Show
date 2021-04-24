import React from 'react'


//Componente de contenido
export default function Contenido({title, text}){
    return(
        <div className="diapositiva">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}