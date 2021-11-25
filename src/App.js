import React, {useState} from "react"
import Die from "./components/Die"

export default function App() {

  const [gameBoard, setGameBoard] = useState(allNewDice())

  console.log(gameBoard);

  function allNewDice() {
    ///random number between 1 and 6
    const newDice = []

    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }

    return newDice
  }

  const dices = gameBoard.map((die, index) => <Die key={index} value={die} />)

  return (
    <main>
      <div className="dice-container">
        {dices}
      </div>
    </main>
  )
}