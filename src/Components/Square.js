import React from 'react'

export default function Square(props) {
  return (
    <div className='square' onClick={props.onClick}>
      <h5>{props.value}</h5>
    </div>
  )
}
