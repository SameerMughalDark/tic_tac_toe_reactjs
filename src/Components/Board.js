import React, {  useState } from 'react'
import Square from './Square'
import PlayAgainButton from './PlayAgainButton';

export default function Board() {
    const [squareState, setSquareState]=useState(Array(9).fill(null));
    const [isXturn, setIsXTurn]=useState(false);
    let playerTurn=isXturn ? "X":"O";


        // creating handleClick function to clicking on my square boxes
       const handleClick=(index)=>{

        //means if there is X or O is already in our boxes than not allowed to put value again
        if(squareState[index]!==null){
            return;
           }
           const copySquareState=[...squareState];
           copySquareState[index]=isXturn ? "X":"O";
           setSquareState(copySquareState);
           setIsXTurn(!isXturn)
        }
      
        // Logic of wining the game
       const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for (let index of winnerLogic){
            const [a,b,c]=index;
            if(squareState[a]!==null && squareState[a]===squareState[b] && squareState[a]===squareState[c]){
                return squareState[a];
            }   

        }
        if (squareState.every((squareBox) => squareBox !== null)) {
            return "draw";
          }
       }

    //    checking winner with help of function that I created 
    const winnerCheck=checkWinner();

    // Reset-Game Logic
       const resetGame=()=>{
       setSquareState( Array(9).fill(null))

       }


    return (
        <>

        <div className='board-container'>
            <h3 align='center'>{!winnerCheck? playerTurn +" : Turn to Play ":" " }</h3>

        { winnerCheck ?<PlayAgainButton winner={winnerCheck} resetFunc={resetGame}/> : <><div className="board-row">
                    {/* Because we want 3 squares per row for our game */}
                    <Square onClick={() => { handleClick(0); } } value={squareState[0]} />
                    <Square onClick={() => { handleClick(1); } } value={squareState[1]} />
                    <Square onClick={() => { handleClick(2); } } value={squareState[2]} />
                </div><div className="board-row">
                        <Square onClick={() => { handleClick(3); } } value={squareState[3]} />
                        <Square onClick={() => { handleClick(4); } } value={squareState[4]} />
                        <Square onClick={() => { handleClick(5); } } value={squareState[5]} />
                    </div><div className="board-row">
                        <Square onClick={() => { handleClick(6); } } value={squareState[6]} />
                        <Square onClick={() => { handleClick(7); } } value={squareState[7]} />
                        <Square onClick={() => { handleClick(8); } } value={squareState[8]} />
                    </div></>
              }
        </div>
  
        </>

    )
}
