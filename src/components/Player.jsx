import { useState } from 'react';

export default function Player({ initName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        /// setIsEditing(!isEditing); would schedule for current update and value will be "false"
        /// setIsEditing(!isEditing); would schedule for current update and value will be still "false"
        setIsEditing((editing) => !editing); /// Allows to work with latest updated value / good practice
        if (isEditing) onChangeName(symbol, playerName);
    }

    function onNameChange(value) {
        setPlayerName(value.target.value);
    }

    let editablePlayerName = <span className={"player-name"}>{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={onNameChange} />;
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );

}