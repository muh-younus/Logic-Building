import { useState } from "react";
const Day10 = () => {
  const [words, setWords] = useState();

  const countWords = () => {
    const words = "I am a boys. And i am a university Students";
    const newWords = words.split(" ");
    console.log(newWords);
    setWords(newWords.length);
  };

  return (
    <>
      <div>
        <p>
          {" "}
          Count Words in a Sentence Write a function that counts the number of
          words in a given string. (Hint: split by space )
        </p>

        <button onClick={countWords}>Count Words</button>
        <p>The total words is: {words}</p>
      </div>
    </>
  );
};

export default Day10;
