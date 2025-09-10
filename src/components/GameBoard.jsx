import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  // // STATE CREATE
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   // STATE UPDATE
  //   setGameBoard((prevGameBoard) => {
  //     // COPY TO AN UPDATED VAR
  //     const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   // change the player
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* STATE UPDATE FCN CALLING AS ANONYMUOUS FCN */}
                {/* <button onClick={() => handleSelectSquare(rowIndex, colIndex)}> */}
                  <button onClick={onSelectSquare}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
