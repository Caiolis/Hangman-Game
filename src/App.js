import Letters from "./components/Letters/Letters";
import Game from "./components/Game/Game";
import { useState } from "react";

export default function App() {
  const [selectedWord, setSelectedWord] = useState('');
  const [lettersKeyboard, setLettersKeyboard] = useState(true);

  return(
    <>
      <Game 
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        setLettersKeyboard={setLettersKeyboard}
      />
      <div className="letter-container">
        <Letters 
          lettersKeyboard={lettersKeyboard}
        />
      </div>
    </>
  );
}