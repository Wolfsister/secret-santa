

function DrawDisplay({listOfPlayers, drawList, drawDisplayIndex}) {

    console.log(drawDisplayIndex)


    function generateDrawDisplayPerFrame() {

        const drawDisplayPerFrame = [];
        listOfPlayers
        .filter((player => {
            return !['', 'PLAYER_REMOVED'].includes(player.playerName) 
        }))
        .map((player) => {

            drawDisplayPerFrame.push({playerName: player.playerName, callPlayerFrame: true})

        
            const receiverName = drawList.find((draw) => draw.giver === player.playerName).receiver

            drawDisplayPerFrame.push(
                {playerName: player.playerName, 
                    callPlayerFrame: false, 
                    receiverName: receiverName
                }
            )

        })

        return drawDisplayPerFrame
    }

    const drawDisplayPerFrame = generateDrawDisplayPerFrame()

    console.log(drawDisplayPerFrame)

    return (
        <div>

            {drawDisplayPerFrame.map((frame) => 

                frame.callPlayerFrame ?
                
                (<div className="call-player-frame">

                    {frame.playerName}, viens voir à qui tu dois offrir.

                </div>)

                :

                (<div className="reveal-receiver-frame">

                    {frame.playerName}, tu dois offrir à {frame.receiverName}.  

                </div>) 
            )}

        

        </div>
    )

}

export default DrawDisplay