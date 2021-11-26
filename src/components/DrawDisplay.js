import '../styles/DrawDisplay.css'
import { useState } from 'react'

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
            console.log('derniere frame')
            updateDrawDisplayIndex(0)
        } else {
            updateDrawDisplayIndex(drawDisplayIndex + 1)
        }
    }

    const drawDisplayPerFrame = generateDrawDisplayPerFrame()

    return (
        <div>

            {drawDisplayPerFrame.map((frame, index) => 


                frame.callPlayerFrame ? 
                
                (<div key={index} className={"call-player-frame " + (drawDisplayIndex === index ? 'show' : 'hidden')}>

                    {frame.playerName}, viens voir à qui tu dois offrir.

                </div>)

                :

                (<div key={index} className={"reveal-receiver-frame " + (drawDisplayIndex === index ? 'show' : 'hidden')}>

                    {frame.playerName}, tu dois offrir à {frame.receiverName}.  

                </div>) 
            )}


{/* TODO: mieux gerer comportement si derniere frame */}

            <button onClick={goToNextFrame}>Ok</button>

        

        </div>
    )

}

export default DrawDisplay