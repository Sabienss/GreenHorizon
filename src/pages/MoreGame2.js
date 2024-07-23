import GameTitle from "../components/GameTitle";
import FrameComponent from "../components/FrameComponent";
import StateWrong4 from "../components/StateWrong4";
import "./MoreGame2.css";

const MoreGame2 = () => {
  return (
    <div className="more-game-6">
      <GameTitle />
      <FrameComponent />
      <div className="more-game-6-inner">
        <div className="statedefault-parent">
          <StateWrong4 />
          <div className="frame-div">
            <div className="statecorrect-wrapper">
              <StateWrong4 />
            </div>
            <StateWrong4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreGame2;
