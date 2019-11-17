import React from "react"
import Box from "./Box"

export default function Game(props) {
 
 
  return (
    <div className='game'>
      {props.grid.map((item, index) => 
      <div className='row'>{item.map((b,id) => <Box key={id}/>)}</div>
      )}
    </div>
  )
}