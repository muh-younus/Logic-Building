import React from 'react'

function Day4() {
    let count =prompt("enter");

    let name = count.toLowerCase().split("");
    console.log("hi",name);
    

    function checkVowel(name){
        let totalVowel = 0;

        for(let i = 0; i < name.length; i++){

        if(name[i] === "a" || name[i] === "e" || name[i] === "i" || name[i] === "o" || name[i] === "u"){
            totalVowel++;
            
        } 
       
        
    }
    return totalVowel;
     alert(`Total vowels: ${totalVowel}`);
    }
    alert(checkVowel(name));
  return (
    <div>
      <button onClick={checkVowel}>Check Vowels</button>
    </div>
  )
}

export default Day4
