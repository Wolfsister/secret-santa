import '../styles/DrawDisplay.css'

function DrawDisplay({listOfUsersForDrawDisplay, drawList, drawDisplayIndex, updateDrawDisplayIndex}) {


    function generateDrawDisplayPerFrame() {


        const drawDisplayPerFrame = [];
        listOfUsersForDrawDisplay
        .filter((user => {
            return !['', 'PLAYER_REMOVED'].includes(user.userName) 
        }))
        .map((user) => {

            drawDisplayPerFrame.push({userName: user.userName, callUserFrame: true})

            const receiverName = drawList.find((draw) => draw.giver === user.userName).receiver

            drawDisplayPerFrame.push(
                {userName: user.userName, 
                    callUserFrame: false, 
                    receiverName: receiverName
                }
            )

            return

        })

        return drawDisplayPerFrame
    }

    function goToNextFrame() {

        if (drawDisplayIndex === (2 * (drawList.length) - 1)) {
            updateDrawDisplayIndex(0)
        } else {
            updateDrawDisplayIndex(drawDisplayIndex + 1)
        }
    }


    const drawDisplayPerFrame = generateDrawDisplayPerFrame()

    return (
        <div className="draw-display-container">

            {drawDisplayPerFrame.map((frame, index) => 


                frame.callUserFrame ? 
                
                (<div key={index} className={"draw-frame call-user-frame " + (drawDisplayIndex === index ? 'show' : 'hidden')}>

                    {frame.userName}, viens voir à qui tu dois offrir.

                </div>)

                :

                (<div key={index} className={"draw-frame reveal-receiver-frame " + (drawDisplayIndex === index ? 'show' : 'hidden')}>

                    {frame.userName}, tu dois offrir à {frame.receiverName}.  

                </div>) 
            )}


{/* TODO: mieux gerer comportement si derniere frame */}

            <button onClick={goToNextFrame}>Ok</button>
            
        </div>
    )

}

export default DrawDisplay