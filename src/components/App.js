import '../styles/App.css';
import Header from './Header'
import PlayersList from './PlayersList';
import LaunchDraw from './LaunchDraw';
import DrawDisplay from './DrawDisplay';
import {useState} from 'react'

function App() {

  const [listOfPlayers, updateListOfPlayers] = useState([{id: 1, playerName: ''}])
  const [drawList, updateDrawList] = useState([])
  const [drawDisplayIndex, updateDrawDisplayIndex] = useState(0)


  return (
    <div className="App">
      <Header />
      <PlayersList listOfPlayers={listOfPlayers} updateListOfPlayers={updateListOfPlayers}/>
      <LaunchDraw listOfPlayers={listOfPlayers} updateDrawList={updateDrawList} updateDrawDisplayIndex={updateDrawDisplayIndex}/>
      {drawList.length > 0 && <DrawDisplay listOfPlayers={listOfPlayers} drawList={drawList} drawDisplayIndex={drawDisplayIndex}/> }
      {/* <DrawDisplay listOfPlayers={listOfPlayers} drawList={drawList} drawDisplayIndex={drawDisplayIndex}/> */}
    </div>
  );
}

export default App;
