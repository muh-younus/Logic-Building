import React from 'react'

function Day1() {

  
  const findMaxNumber = (a,b)=>{

  //   const  a =12;
  // const b = 35;
  if(a > b){

    // return(console.log("a is greater than b"))
    return a;
  }
  else{

    // return(console.log("b is greater than a"));
    return b;
  }
  }
  return (
    <div>

<h1> The greater number is {findMaxNumber(55,343)}</h1>
      
    </div>
  )
}

export default Day1
