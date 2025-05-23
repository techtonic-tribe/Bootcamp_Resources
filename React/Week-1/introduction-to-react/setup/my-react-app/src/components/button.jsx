import React from 'react'

const  Button =() =>{
    const buttonstyle={     // button styling internal css
        width:100 ,
        height:100 ,
        backgroundColor:'green'
    }
  return (
    <div>
       <button style={buttonstyle}>click me </button>
    </div>
  )
}

export default Button;