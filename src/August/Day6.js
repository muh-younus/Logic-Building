import React, { useEffect } from "react";

function Palindrome1() {
  function palindrome() {
    let input = "Muhammad";
    console.log(input);
    let reverse = input.split("").reverse().join("");
    console.log(reverse);

    if (input === reverse) {
      console.log("Palindrome");
    } else {
      console.log("not Palindrome");
    }
  }

  function largestNumber() {
    debugger
    let array = [ 4, 6, 40, 10, 12, 2];
    let number = array[0];
    
    
    for (let i = 0; i < array.length; i++) {
      

      
        if (array[i] > number) {
          number = array[i];
          console.log(number)
        }
      
    }
    console.log("Largest Number is: " + number);
  }

  largestNumber();

  useEffect(() => {
    //palindrome();
  }, []);

  return <div></div>;
}

export default Palindrome1;
