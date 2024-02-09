import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }){
    const [playerName, setPlayerName ] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditing = () => {
        setIsEditing(current => !current)

        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }

    const handleNameChange = event => setPlayerName(event.target.value)

    let playerNameField = isEditing ? 
        <input 
            placeholder="add a name" 
            type="text" 
            required 
            value={playerName} 
            onChange={handleNameChange}
        /> : 
        <span className="player-name">{playerName}</span>

    return (
        <li className={isActive ? 'active' : null }>
            <span className="player">
                {playerNameField}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditing} >{isEditing ? 'Save': 'Edit'}</button>
            </span>
        </li> 
    )
}