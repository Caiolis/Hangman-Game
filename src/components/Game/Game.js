import "./style.css";
import forca0 from "../../assets/imgs/forca0.png";

export default function Game() {
    return (
        <div className="game-container">
            <div className="game-image">
                <img src={forca0} alt="Hang Image" />
            </div>

            <div className="game-information">
                <div className="start-button-container">
                    <button className="start-button">Escolher Palavra</button>
                </div>
                <div className="word-container">
                    <span>_ _ _ _ _ _ _ _ _ _</span>
                </div>
            </div>
        </div>
    );
}