import React from "react"

export default function Box(props){
  function move(){
    if(!props.value){
    props.makeMove(props.row, props.column)
    }
  }
  return(
    <div className='box' onClick={move}>
     <p className='value'> {props.value} </p>
    </div>
  )
}