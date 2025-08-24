import React from 'react'

function Day9() {

    function capitalFirstLetter(){

    const firstCapitalized = "i am a good boy. and I love flower";
    let array = firstCapitalized.split(" ");
    console.log("i am lower case array",array);
    debugger
    for(let i=0; i<array.length; i++){
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    // return array.join(" ");
    console.log("i am upper case array",array);
}
 
  return (
    <div>
      <h1>Day 9</h1>
      <p>7. Capitalize First Letter of Each Word Write a function that capitalizes the first letter of each word in
 a string. (Example: 'hello world' → 'Hello World')</p>
      <button onClick={capitalFirstLetter}>Click Me</button>
    </div>
  )
}

export default Day9
