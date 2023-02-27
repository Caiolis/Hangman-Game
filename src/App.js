import Letters from "./components/Letters/Letters";
import Game from "./components/Game/Game";
import { useState } from "react";

export default function App() {
  const [selectedWord, setSelectedWord] = useState();
  const [lettersKeyboard, setLettersKeyboard] = useState(true);
  const [clickedLetters, setClickedLetters] = useState([]);

  function handleClick(clickedLetter) {
    const clickedList = [...clickedLetters, clickedLetter];
    setClickedLetters(clickedList);

    for(let i = 0; i < selectedWord.length; i++) {
      if(selectedWord[i].toUpperCase() === clickedLetter) {
        selectedWord[i] = clickedLetter;

        setClickedLetters()
      }
    }

    console.log(clickedLetter);
  }

  return(
    <>
      <Game 
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        setLettersKeyboard={setLettersKeyboard}
        clickedLetters={clickedLetters}
      />
      <div className="letter-container">
        <Letters 
          lettersKeyboard={lettersKeyboard}
          clickedLetters={clickedLetters}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}