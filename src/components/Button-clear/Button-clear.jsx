import React from 'react'
import "./Button-clear.css"

function ButtonClear(props) {

  return (
    <div className='button-clear'
    onClick={()=> props.handleClear()}
    >{props.children}</div>
  )
}

export default ButtonClear