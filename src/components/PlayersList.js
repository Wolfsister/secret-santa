import Player from "./Player"

function PlayersList({listOfPlayers, updateListOfPlayers}) {


    function generateKey() {

        return Math.floor(Math.random() * 9999)
        // const dateTime = new Date().getTime()
        // return `${index}-${dateTime}`
    }
    
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