import '../styles/App.css';
import Header from './Header'
import PlayersList from './PlayersList';
import LaunchDraw from './LaunchDraw';
import DrawDisplay from './DrawDisplay';
import {useState, useEffect} from 'react'

function App() {

  const savedListPlayers = localStorage.getItem('savedList')
  const [listOfPlayers, updateListOfPlayers] = useState(savedListPlayers ? JSON.parse(savedListPlayers) : [{playerName: ''}])
  const [drawList, updateDrawList] = useState([])
  const [drawDisplayIndex, updateDrawDisplayIndex] = useState(0)

  useEffect(() => {

    localStorage.setItem('savedList', JSON.stringify(listOfPlayers))

  }, [listOfPlayers])

  return (
    <div className="App">
      <Header />
      <PlayersList listOfPlayers={listOfPlayers} updateListOfPlayers={updateListOfPlayers}/>
      <LaunchDraw listOfPlayers={listOfPlayers} updateDrawList={updateDrawList} updateDrawDisplayIndex={updateDrawDisplayIndex}/>
      {drawList.length > 0 && 
        <DrawDisplay 
        listOfPlayers={listOfPlayers} 
        drawList={drawList} 
        drawDisplayIndex={drawDisplayIndex}
        updateDrawDisplayIndex={updateDrawDisplayIndex}/> 
      }
    </div>
  );
}

export default App;
