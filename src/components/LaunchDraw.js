


function LaunchDraw({listOfUsers, updateDrawList, updateDrawDisplayIndex, updateListOfUsersForDrawDisplay}) {



    function isDrawValid() {

        //@TODO
        return true;

    }

    function generateDraw() {

        if (isDrawValid) {

            updateDrawDisplayIndex(0)
            // shuffle array
            const draw = [...listOfUsers]
            .filter((user => {
                return !['', 'PLAYER_REMOVED'].includes(user.userName) 
                // return (user.userName !== '' && user.userName !== 'PLAYER_REMOVED')
            }))
            .sort((a, b) => 0.5 - Math.random())

            const readableDrawList = [];

            for (let i = 0; i < draw.length; i++) {

                const giver = draw[i].userName
                const receiver = (draw[i+1] !== undefined) ? draw[i+1].userName : draw[0].userName

                readableDrawList.push({giver: giver, receiver: receiver})
            }

            updateDrawList(readableDrawList)
            // cette méthode permet de ne passer la liste à drawDisplay uniquement quand les joueurs sont prêts et ne pas affecter le component en cours d'utilisation
            updateListOfUsersForDrawDisplay(listOfUsers)

        } else {

            alert('Problème sur vos utilisateurs')
        }

    }


    return (

        <button className="launch-draw" onClick={generateDraw}>Lancer tirage</button>
    )

}

export default LaunchDraw