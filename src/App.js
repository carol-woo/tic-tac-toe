import React, {useState} from 'react';
import './App.css';
import Box from './components/Box'
import Game from './components/Game'
import Players from './components/Players'

function App() {
  const [grid, setMove] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])
  
  return (
    <div className="App">
      <p>Hello Wurld c: I am a game!</p>
      <Players/>
      <Game grid={grid}/>
    </div>
  );
}

export default App;
