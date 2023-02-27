import "./style.css";
import forca0 from "../../assets/imgs/forca0.png";
import word from "../../palavras.js";

export default function Game({ selectedWord, setSelectedWord, setLettersKeyboard }) {

  // Generates a random number between 0 and max value of words array
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  //Starts the game by generating a random word
  function startGameButton() {
    // Generates a random word and inserts into the selected word state    
    const random = getRandomInt(0, word.length - 1);
    const placeholderWord = word[random];
    setSelectedWord(placeholderWord);

    // Enables the keyboard
    setLettersKeyboard(false);
  }

  return (
    <div className="game-container">
      <div className="game-image">
        <img src={forca0} alt="Hang Image" />
      </div>

      <div className="game-information">
        <div className="start-button-container">
          <button className="start-button" onClick={startGameButton}>Escolher Palavra</button>
        </div>
        <div className="word-container">
          <span>_ _ _ _ _ _ _ _ _ _</span>
        </div>
      </div>
    </div>
  );
}
