import React, {useState, Fragment} from 'react';
import styled, {keyframes} from 'styled-components'
import {pulse} from 'react-animations'
import './App.css';
import Game from './components/Game'
import Players from './components/Players'

const pulseAnimation = keyframes`${pulse}`;
 const PulseDiv = styled.div`
  animation: 1.5s ${pulseAnimation}
  infinite; 
`;


function App() {
  const [grid, setMove] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])
  const [player, setPlayer] = useState('Player 1')
  const [colour, setColour] = useState(' active')
  const [colour2, setColour2] = useState(' inactive')

  function makeMove(x, y) {
    let dupGrid = [...grid]

    if(player === 'Player 1'){
      dupGrid[x][y] = 'x'
      setMove(dupGrid)
      setPlayer('Player 2')
      setColour(' inactive')
      setColour2(' active')
    } else {
      dupGrid[x][y] = 'o'
      setMove(dupGrid)
      setPlayer('Player 1')
      setColour(' active')
      setColour2(' inactive')
    }
  }

  function restartGame() {
    setMove(
      [
        ['','',''],
        ['','',''],
        ['','',''],
      ]
    )
  }


// //Implement this...somehow. And make it dry, oh god. Its so much code :^(
function win(){
  const theSameX = (currentValue) => currentValue === 'x'
  const theSameO = (currentValue) => currentValue === 'o'

  let winner = <PulseDiv><p className="win">!!!You win {player}!!!</p></PulseDiv> 

  let column0 = [grid[0][0],grid[1][0],grid[2][0]]
  let column1 = [grid[0][1],grid[1][1],grid[2][1]]
  let column2 = [grid[0][2],grid[1][2],grid[2][2]]

  let diag1 = [grid[0][0],grid[1][1],grid[2][2]]
  let diag2 = [grid[2][0],grid[1][1],grid[0][2]]
  
  //Checking Rows
  if(grid[0].every(theSameX) || grid[0].every(theSameO)){
    return winner
  }else if(grid[1].every(theSameX) || grid[1].every(theSameO)){
    return winner
  }else if(grid[2].every(theSameX) || grid[2].every(theSameO)){
    return winner
  }
  //Checking Columns
  else if(column0.every(theSameX) || column0.every(theSameO)){
    return winner
  }else if(column1.every(theSameX) || column1.every(theSameO)){
    return winner
  }else if(column2.every(theSameX) || column2.every(theSameO)){
    return winner
  }
  //Checking Diagonals
  else if(diag1.every(theSameX) || diag1.every(theSameO)){
    return winner
  }else if(diag2.every(theSameX) || diag2.every(theSameO)){
    return winner
  } 
  //If none match, then return the player who is up next
  else {
  return (
    <Fragment>
    <PulseDiv><p className="win"> You're up {player}!</p></PulseDiv>
    <Game grid={grid} makeMove={makeMove} />
    </Fragment>
  )
  } 
}



  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Players currentPlayer={player} background={colour} background2={colour2} />
      <p className="win">{win()}</p>
      <button onClick={restartGame}>Restart Game?</button>
    </div>
  );
}

export default App;
