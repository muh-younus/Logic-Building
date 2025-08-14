import React, { useEffect } from 'react'

function Palindrome1() {


    function palindrome(){

        let input = "Muhammad";
        console.log(input);
        let reverse =input.split("").reverse().join("");
        console.log(reverse);

        if(input === reverse){
            console.log("Palindrome");  
        }
        else{
            console.log("not Palindrome")
        }

    }

    function largestNumber(){

        let array = [2,4,6,8,10,12,14,16];
        let number = 0;
        let count = 0;
        for(let i =0; i < array.length; i++){
            number = array[i];

            if(number < array[i + 1]){


                count = array[i + 1];
                
            }

            
        }
        console.log("Largest Number is: " + count);
    }

    largestNumber(); 

    useEffect(() => {   
        //palindrome(); 
             
    },[]);  

  return (
    <div>
      
    </div>
  )
}

export default Palindrome1
