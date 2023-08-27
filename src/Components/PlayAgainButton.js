import React from 'react'

export default function PlayAgainButton(props) {
  return (
   <>
   <div className="playAgainSection">

   <h1>{`${props.winner === "draw"?"Game is Draw" : props.winner + "  is Winner" }`}</h1> 
   <button className='playAgainBtn'onClick={props.resetFunc} >Play Again</button> 
   </div>
   </>
  )
}
