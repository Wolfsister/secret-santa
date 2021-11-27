import '../styles/App.css';
import Header from './Header'
import UsersList from './UsersList';
import LaunchDraw from './LaunchDraw';
import DrawDisplay from './DrawDisplay';
import {useState, useEffect} from 'react'

function App() {

  document.title = 'Secret Santa'
  

  const savedListUsers = localStorage.getItem('savedList')
  const [listOfUsers, updateListOfUsers] = useState(savedListUsers ? JSON.parse(savedListUsers) : [{userName: ''}])
  const [listOfUsersForDrawDisplay, updateListOfUsersForDrawDisplay] = useState([])
  const [drawList, updateDrawList] = useState([])
  const [drawDisplayIndex, updateDrawDisplayIndex] = useState(0)

  useEffect(() => {

    localStorage.setItem('savedList', JSON.stringify(listOfUsers))

  }, [listOfUsers])

  return (
    <div className="App">
      <Header />
      <UsersList listOfUsers={listOfUsers} updateListOfUsers={updateListOfUsers}/>
      <LaunchDraw listOfUsers={listOfUsers} updateDrawList={updateDrawList} updateDrawDisplayIndex={updateDrawDisplayIndex} updateListOfUsersForDrawDisplay={updateListOfUsersForDrawDisplay}/>
      {drawList.length > 0 && 
        <DrawDisplay 
        listOfUsersForDrawDisplay={listOfUsersForDrawDisplay} 
        drawList={drawList} 
        drawDisplayIndex={drawDisplayIndex}
        updateDrawDisplayIndex={updateDrawDisplayIndex}/> 
      }
    </div>
  );
}

export default App;
