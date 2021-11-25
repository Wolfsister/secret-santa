


function LaunchDraw({listOfPlayers, updateDrawList}) {



    function isDrawValid() {


        //@TODO
        return true;

    }

    function generateDraw() {

        console.log('generate draw')
        if (isDrawValid) {

            // shuffle array
            const draw = [...listOfPlayers]
            .filter((player => {
                return !['', 'PLAYER_REMOVED'].includes(player.playerName) 
                // return (player.playerName !== '' && player.playerName !== 'PLAYER_REMOVED')
            }))
            .sort((a, b) => 0.5 - Math.random())

            console.log(draw)
            const readableDrawList = [];

            for (let i = 0; i < draw.length; i++) {

                const giver = draw[i].playerName
                const receiver = (draw[i+1] !== undefined) ? draw[i+1].playerName : draw[0].playerName

                readableDrawList.push({giver: giver, receiver: receiver})
            }

            updateDrawList(readableDrawList)



        } else {

            alert('Problème sur vos utilisateurs')
        }

    }


    return (

        <button className="launch-draw" onClick={generateDraw}>Lancer tirage</button>
    )

}

export default LaunchDraw