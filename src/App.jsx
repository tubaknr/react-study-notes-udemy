import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  // Change the user
  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    
    // bir önceki state e bağlı -> arrow fcn!
    setGameTurns((prevTurn) => {
      const currentPlayer = 'X';

      if(prevTurn.length > 0 && prevTurn[0].player === 'X'){
        currentPlayer = 'O';
      }
    
      const updatedTurn = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurn];

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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
