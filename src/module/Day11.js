import React from 'react'

function Day11() {
    const array = [34,4,45,1];

    function findMinNumber(){
        let min = array[0];

       for(let i=1; i< array.length; i++){

        
        if(array[i] < min){

             min = array[i];
             console.log(min);
            //  debugger
            
        }
       }
       console.log(min);
        return min;
       
       
    }
  return (
    <>
    <h1>The minimum number is {findMinNumber()}</h1>
    </>
  )
}

export default Day11
