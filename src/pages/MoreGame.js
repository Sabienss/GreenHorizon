import Main from "../components/Main";
import Interactions from "../components/Interactions";
import ReduceOptions from "../components/ReduceOptions";
import "./MoreGame.css";

const MoreGame = () => {
  return (
    <div className="more-game-2">
      <h2 className="eco-game">ECO GAME</h2>
      <Main />
      <Interactions />
      <ReduceOptions />
    </div>
  );
};

export default MoreGame;
