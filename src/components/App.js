import '../styles/App.css';
import Header from './Header'
import PlayersList from './PlayersList';
import {useState} from 'react'

function App() {

  const [listOfPlayers, updateListOfPlayers] = useState([{id: 1, playerName: ''}]);


  return (
    <div className="App">
      <Header />
      <PlayersList listOfPlayers={listOfPlayers} updateListOfPlayers={updateListOfPlayers}/>
    </div>
  );
}

export default App;
