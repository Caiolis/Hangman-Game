import "./style.css";

export default function Letters({ lettersKeyboard, handleClick, clickedLetters }) {
  
  const alphabet = [
    "a", "b", "c",
    "d", "e", "f",
    "g", "h", "i",
    "j", "k", "l",
    "m", "n", "o",
    "p", "q", "r",
    "s", "t", "u",
    "v", "w", "x",
    "y", "z",
  ];
  
  return (
    <>
      {alphabet.map(letter => <LetterButton 
                                lettersKeyboard={lettersKeyboard} 
                                key={letter} 
                                letter={letter.toUpperCase()} 
                                handleClick={handleClick} 
                                clickedLetters={clickedLetters}
                              />)}
    </>
  );
}

function LetterButton({ lettersKeyboard, letter, handleClick, clickedLetters }) {
  return (
        <div className="letter">
            <button disabled={lettersKeyboard == true ? lettersKeyboard : clickedLetters.includes(letter)} onClick={() => handleClick(letter)}>{letter}</button>
        </div>
  );
}
