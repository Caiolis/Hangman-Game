import "./style.css";

export default function Letters({ lettersKeyboard }) {
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
      {alphabet.map(letter => <LetterButton lettersKeyboard={lettersKeyboard} key={letter} letter={letter.toUpperCase()}/>)}
    </>
  );
}

function LetterButton({ lettersKeyboard, letter }) {
  return (
        <div className="letter">
            <button disabled={lettersKeyboard}>{letter}</button>
        </div>
  );
}
