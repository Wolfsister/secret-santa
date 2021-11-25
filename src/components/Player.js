import '../styles/Player.css'

function Player({playerName, listOfPlayers, updateListOfPlayers, index}) {


    function updatePlayer(playerName) {

        const updatedList = [...listOfPlayers]

        if (playerName.length === 0) {
            
            // on supprime l'utilisateur
            updatedList.splice(index, 1)

        } else {

            // on édite l'utilisateur
            updatedList.splice(index, 1, {playerName: playerName})
        }


        // on ajoute un input vide s'il n'y en n'a pas
        const emptyElement = updatedList.find((player) => {
            return player.playerName === ''
        })

        if (emptyElement === undefined) {
            updatedList.push({playerName: ''})
        }

        updateListOfPlayers(updatedList)
    }

    function removePlayer() {

        const updatedList = [...listOfPlayers]

        // As we don't have a proper key, we need to use this trick to keep consistence with keys in playersList
        updatedList.splice(index, 1, {playerName: 'PLAYER_REMOVED'})

        updateListOfPlayers(updatedList)

    }

    
    return (

        <div className="player-container">
            <input 
            type='text' 
            placeholder="Joueur" 
            onChange={(e) => updatePlayer(e.target.value)}>
            </input>

            {index !== (listOfPlayers.length - 1) && 
                <div 
                className="remove-player-cross clickable"
                onClick={removePlayer}
                >X</div>
            }
            
        </div>

    )


}

export default Player