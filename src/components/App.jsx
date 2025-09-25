import Dice from "./Dice.jsx";
import '../styles/index.css';
import { useState } from "react";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App(){

    const [dice,setDice] = useState(generateDice());

    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);
 

    function generateDice(){
        return new Array(10).fill(0)
            .map(()=>({
                value:Math.ceil(Math.random() * 6),
                isHeld:false,
                id:nanoid()
            }))
    }

    function hold(id){
        setDice(oldDice => oldDice.map(dice=>
                dice.id === id ?
                    {...dice , isHeld : !dice.isHeld } : dice
        ))
    }

    const diceElements = dice.map(
        dieObj=> 
        <Dice 
            key={dieObj.id} 
            held={dieObj.isHeld} 
            value={dieObj.value} 
            hold={()=>hold(dieObj.id)} 
        /> 
    );

    function rollDice(){
        setDice(oldDice=>oldDice.map(dice =>
            dice.isHeld ? 
                dice :
                {...dice, value:Math.ceil(Math.random() * 6) }
        ));
    }

    return(
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instruction">Roll untill all dice are the same, Click each die to freeze it and its current value between rolls. </p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-btn" onClick={rollDice}>{gameWon ? "New Game" : "Roll" }</button>
        </main>
    ) 
}

export default App;