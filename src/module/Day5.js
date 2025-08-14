import React, { useEffect, useState } from 'react'

function Day5() {
  const [result, setResult] = useState(0);
  let array = [2, 3, 4, 5, 6, 7, 8];

  function sum() {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
       count = count + array[i];
      console.log(i,"  ",count);
    }
   setResult(count);
  }
  useEffect(() => {   
    sum();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Call the function so it runs when the component renders
  

  return (
    <div>
      <h1>Check console for results</h1>
      <button >Calculate Sum</button>
      <p> And the final Sum  is {result}</p>
    </div>
  );
}

export default Day5;
