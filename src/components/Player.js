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
        console.log(index)
        console.log(updatedList)

        updatedList.splice(index, 1, {playerName: 'PLAYER_REMOVED'})

        console.log(updatedList);

        updateListOfPlayers(updatedList)

    }

    
    return (

        <div>
            <input 
            type='text' 
            placeholder="Joueur" 
            onChange={(e) => updatePlayer(e.target.value)}>
            </input>

            {index > 0 && listOfPlayers.length > 1 && 
                <div 
                className="remove-player-cross clickable"
                onClick={removePlayer}
                >X</div>
            }
            
        </div>

    )


}

export default Player