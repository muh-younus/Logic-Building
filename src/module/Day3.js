import React, { useState} from 'react'

function Day3() {
    const [name, setName] = useState("");

    const vowel = () =>{

        let name = "WORLD"
        
        let str = name.split("");
        console.log("array",str);
        let join = str.reverse();
        let result = join.join("");
        setName(result);

        console.log("Reverse order",result);
    }
  return (
    <div>
       
      
      <button onClick={vowel}>Click Me</button>
      <p>{name}</p>

     

        
        
        
    
    </div>
  )
}

export default Day3
