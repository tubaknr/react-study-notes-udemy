import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  // STATE CREATE
  const [isEditing, setIsEditing] = useState(false);

  // STATE CREATE
  const [name, setName] = useState(initialName);

  // STATE UPDATE
  const handleClick = () => {
    setIsEditing((editing) => !editing); // state dğiştiği zaman aşağıda return un içindeki tüm jsx i yeniden render eder.
  
    if(isEditing){
      onChangeName(symbol, playerName);
    }

  };

  // STATE UPDATE
  const handleChange = (event) => {
    setName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={name} onChange={handleChange}></input>
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
