import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './components/winning-combinations';
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


// helper fcn 
function deriveActivePlayer(gameTurns){
  let currentActivePlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentActivePlayer = 'O';
  }

  return currentActivePlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  let winner;

  for(const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    
    gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    
    if (firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol)
      {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;


  // Change the user
  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    
    // bir önceki state e bağlı -> arrow fcn!
    setGameTurns((prevTurn) => {
      const currentActivePlayer = deriveActivePlayer(prevTurn);
    
      const updatedTurn = [
        {square: 
          {row: rowIndex, col: colIndex}, 
          player: currentActivePlayer}, 
        ...prevTurn
      ];

      return updatedTurn;
    }); 
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}/>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          // activePlayerSymbol={activePlayer}
          gameBoard={gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
