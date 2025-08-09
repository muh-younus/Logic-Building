import React from 'react'

function Day2() {

    let number = [-2,3,0]

    function checkNumber(){

        number.forEach((num)=>{

            if(num < 0){
                console.log(String(num) + " is negative");
            }else if(num > 0){
                console.log(String(num) + " is positive");
            }else{
                console.log(String(num) + " is zero");
            }
        })
    }
  return (
    <div>

        <button onClick={checkNumber}>Clicked Me</button>
      
    </div>
  )
}

export default Day2
