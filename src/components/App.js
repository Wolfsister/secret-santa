import '../styles/App.css';
import Header from './Header'
import PlayersList from './PlayersList';
import LaunchDraw from './LaunchDraw';
import {useState} from 'react'

function App() {

  const [listOfPlayers, updateListOfPlayers] = useState([{id: 1, playerName: ''}])
  const [drawList, updateDrawList] = useState([])


  return (
    <div className="App">
      <Header />
      <PlayersList listOfPlayers={listOfPlayers} updateListOfPlayers={updateListOfPlayers}/>
      <LaunchDraw listOfPlayers={listOfPlayers} updateDrawList={updateDrawList}/>

    </div>
  );
}

export default App;
