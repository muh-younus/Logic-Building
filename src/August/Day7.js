import React from 'react'

function Day7() {

    function Multiplication(){

        for(let i = 1; i <= 10; i++){

            console.log(`2 * ${i} = ${ 2 * i}`)
        }
    }
  return (
    <div>
      <button onClick={Multiplication}>Multiply</button>
    </div>
  )
}

export default Day7
