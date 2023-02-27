import Letters from "./components/Letters/Letters";
import Game from "./components/Game/Game";

export default function App() {
  return(
    <>
      <Game />
      <div className="letter-container">
        <Letters />
      </div>
    </>
  );
}