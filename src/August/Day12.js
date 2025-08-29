import React from "react";

function Day11() {

    const value = [11,33,44,22,11,33,44,55]
    debugger

    const removeDup = (value) =>{

        console.log("the value is:" + value);

        const uniqueValues = [...new Set(value)];
        console.log("the unique values are:" + uniqueValues);
    }
  return (
    <div>
      <p>
       
        Remove Duplicates from an Array Write a function that removes all
        duplicate values from an array and returns a new array.
      </p>

      <button onClick ={() => removeDup(value)}>Remove Duplicate Value</button>
    </div>
  );
}

export default Day11;
