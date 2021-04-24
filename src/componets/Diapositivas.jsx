import React, {useState} from 'react'
import Content from './Content'


//Se declara el array con los mensajes
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

    //definir dos hooks para evaluar las posiciones del array
    const [numDiapositiva, updateDiapositiva] = useState(0)
    const [num, updateNum] = useState(0)

    return(
        <div className="container">
            <div className="botones">
                {/* botonones para cambiar los estados del hook */}
                <button href="#" onClick={()=>{
                   updateDiapositiva(0);
                   updateNum(0); 
                }} disabled={numDiapositiva == 0} >Restart</button>
                <button href="#" onClick={()=>{
                   updateDiapositiva(numDiapositiva - 1);
                   updateNum(num - 1); 
                }} disabled={numDiapositiva == 0} >Prev</button>
                <button href="#" onClick={()=>{
                   updateDiapositiva(numDiapositiva + 1);
                   updateNum(num + 1); 
                }} disabled={numDiapositiva == 4} >Next</button>
            </div>

            {/* llamar al componente de Conten para renderizar por pantalla */}
            <div className="contenido">
                <Content 
                    title={diapositivas[num].title}
                    text={diapositivas[num].text}
                />
            </div>
        </div>
    )
}