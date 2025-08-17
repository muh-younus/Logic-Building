import React from 'react'

function Day8() {

    function SmallestNumber(){

        let number = [23,4,54,1,0,3];

        let smallNumber;
        debugger
        for(let i = 0; i < number.length; i++){ 

             smallNumber =  number[i];

            if( number[i + 1] < smallNumber){

                smallNumber = number[i + 1];
            }

        }
        console.log(smallNumber);

    }
  return (
    <div>

        <button onClick={SmallestNumber}>Click Me</button>
      
    </div>
  )
}

export default Day8
