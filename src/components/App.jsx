import Dice from "./Dice.jsx";
import '../styles/index.css';
import { useState } from "react";

function App(){

    const [dice,setDice] = useState(generateDice());

    function generateDice(){
        const newDice = [];
        for(let i=0;i<10;i++){
            const num = Math.ceil(Math.random() * 6);
            newDice.push(num);
        }
        return newDice;
    }

    const diceElements = dice.map(num=> <Dice value={num} /> );

    function rollDice(){
        setDice(generateDice());
    }

    return(
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-btn" onClick={rollDice}>Roll</button>
        </main>
    ) 
}

export default App;