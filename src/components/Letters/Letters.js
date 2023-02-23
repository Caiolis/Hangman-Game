import "./style.css";

export default function Letters() {
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
      {alphabet.map(letter => <LetterButton letter={letter.toUpperCase()}/>)}
    </>
  );
}

function LetterButton(props) {
  return (
        <div className="letter">
            <button disabled="true">{props.letter}</button>
        </div>
  );
}
