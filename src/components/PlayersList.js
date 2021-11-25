import Player from "./Player"

function PlayersList({listOfPlayers, updateListOfPlayers}) {
    
    return (

        <div>
            {listOfPlayers
            .map(({playerName}, index) => 
                            
                playerName !== 'PLAYER_REMOVED' && (        
                    <div key={index}>            
                        <Player index={index} listOfPlayers={listOfPlayers} playerName={playerName} updateListOfPlayers={updateListOfPlayers}/>
                    </div>
            
                
                ) 
                
            )}

        </div>    

    )


}

export default PlayersList