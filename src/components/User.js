import '../styles/User.css'

function User({userName, listOfUsers, updateListOfUsers, index}) {


    function updateUser(userName) {

        const updatedList = [...listOfUsers]

        if (userName.length === 0) {
            
            // on supprime l'utilisateur
            updatedList.splice(index, 1)

        } else {

            // on édite l'utilisateur
            updatedList.splice(index, 1, {userName: userName})
        }


        // on ajoute un input vide s'il n'y en n'a pas
        const emptyElement = updatedList.find((user) => {
            return user.userName === ''
        })

        if (emptyElement === undefined) {
            updatedList.push({userName: ''})
        }

        updateListOfUsers(updatedList)
    }

    function removeUser() {

        const updatedList = [...listOfUsers]

        // As we don't have a proper key, we need to use this trick to keep consistence with keys in usersList
        updatedList.splice(index, 1, {userName: 'PLAYER_REMOVED'})

        updateListOfUsers(updatedList)

    }

    
    return (

        <div className="user-container">
            <input 
            type='text' 
            placeholder="Nouveau Participant" 
            value={userName}
            onChange={(e) => updateUser(e.target.value)}>
            </input>

            {index !== (listOfUsers.length - 1) && 
                <div 
                className="remove-user-cross clickable"
                onClick={removeUser}
                >X</div>
            }
            
        </div>

    )


}

export default User