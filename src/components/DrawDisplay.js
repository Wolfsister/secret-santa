import '../styles/DrawDisplay.css'

function DrawDisplay({listOfPlayers, drawList, drawDisplayIndex, updateDrawDisplayIndex}) {


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

    function goToNextFrame() {

        console.log([drawDisplayIndex, 2 *(drawList.length - 1), '----'])

        if (drawDisplayIndex === (2 *(drawList.length - 1))) {
            updateDrawDisplayIndex(0)
        } else {
            updateDrawDisplayIndex(drawDisplayIndex + 1)
        }
    }

    const drawDisplayPerFrame = generateDrawDisplayPerFrame()

    return (
        <div className="draw-display-container">

            {drawDisplayPerFrame.map((frame, index) => 


                frame.callPlayerFrame ? 
                
                (<div key={index} className={"draw-frame call-player-frame " + (drawDisplayIndex === index ? 'show' : 'hidden')}>

                    {frame.playerName}, viens voir à qui tu dois offrir.

                </div>)

                :

                (<div key={index} className={"draw-frame reveal-receiver-frame " + (drawDisplayIndex === index ? 'show' : 'hidden')}>

                    {frame.playerName}, tu dois offrir à {frame.receiverName}.  

                </div>) 
            )}


{/* TODO: mieux gerer comportement si derniere frame */}

            <button onClick={goToNextFrame}>Ok</button>

        

        </div>
    )

}

export default DrawDisplay