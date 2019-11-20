import React from "react"


export default function Players(props) {
 
  return (
    <div className='players'>
      <div className={'player' + props.background2}>Player 1</div>
      <div className={'player' + props.background}>Player 2</div>
    </div>
  )
}