import React, {useState} from 'react'
import Content from './Content'

const diapositivas = [
    {
        title:"Todays workout plan",
        text:"Hola mundo" 
    },
    {
        title:"First, 10-push-ups",
        text:"Hola mundo"
    },
    {
        title:"Next, 20 squats",
        text:"Hola mundo"
    },
    {
        title:"Finally, 15 sits-ups",
        text:"Hola mundo"
    },
    {
        title:"Great job",
        text:"Hola mundo"
    }
]

export default function Diapositivas(){

    const [numDiapositiva, updateDiapositiva] = useState(0)
    const [num, updateNum] = useState(0)

    return(
        <div className="container">
            <div className="botones">
                <a href="#" onClick={()=>{
                   updateDiapositiva(0);
                   updateNum(0); 
                }}>Restart</a>
                <a href="#" onClick={()=>{
                   updateDiapositiva(numDiapositiva - 1);
                   updateNum(num - 1); 
                }}>Prev</a>
                <a href="#" onClick={()=>{
                   updateDiapositiva(numDiapositiva + 1);
                   updateNum(num + 1); 
                }}>Next</a>
            </div>
            <div className="contenido">
                <Content 
                    title={diapositivas[num].title}
                    text={diapositivas[num].text}
                />
            </div>
        </div>
    )
}