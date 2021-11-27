import User from "./User"

function UsersList({listOfUsers, updateListOfUsers}) {
    
    return (

        <div>
            {listOfUsers
            .map(({userName}, index) => 
                            
                userName !== 'PLAYER_REMOVED' && (        
                    <div key={index}>            
                        <User index={index} listOfUsers={listOfUsers} userName={userName} updateListOfUsers={updateListOfUsers}/>
                    </div>
            
                
                ) 
                
            )}

        </div>    

    )


}

export default UsersList