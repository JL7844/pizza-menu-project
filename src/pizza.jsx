import React from 'react'
import './data.js'
const Pizaa = (props) => {
  return (
    <div className='pizza'>
        <img src={props.src} alt="spinaci" />
        <h3>{props.type}</h3>
        <p>{props.component}</p>
        <p>{props.number}</p>
        
    </div>
  )
}

export default Pizaa