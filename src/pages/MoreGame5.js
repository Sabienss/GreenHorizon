import StateWrong10 from "../components/StateWrong10";
import StateCorrect6 from "../components/StateCorrect6";
import StateCorrect5 from "../components/StateCorrect5";
import GroupComponent1 from "../components/GroupComponent1";
import "./MoreGame5.css";

const MoreGame5 = () => {
  return (
    <div className="more-game-1">
      <section className="game-description-parent">
        <div className="game-description">
          <h2 className="rs-reduce-reuse2">3 R’s: Reduce, Reuse, Recycle</h2>
          <h2 className="eco-game3">ECO GAME</h2>
          <div className="green10">green</div>
        </div>
        <div className="horizons10"> Horizons</div>
      </section>
      <section className="more-game-1-inner">
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="frame-parent8">
              <div className="image-5-parent">
                <img
                  className="image-5-icon"
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
                <img className="reduce-image-box" alt="" src="/shape@2x.png" />
              </div>
              <StateWrong10
                propAlignSelf="unset"
                propWidth="276px"
                propPosition="absolute"
                propTop="247px"
                propLeft="327px"
              />
            </div>
            <StateCorrect6
              propPosition="absolute"
              propTop="247px"
              propLeft="603px"
            />
          </div>
          <div className="instance-frame">
            <StateCorrect5
              propAlignSelf="stretch"
              propWidth="unset"
              propFlex="unset"
              propMinWidth="unset"
            />
          </div>
        </div>
      </section>
      <div className="statedefault-group">
        <StateCorrect6
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
        />
        <StateCorrect6
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
        />
        <StateCorrect6 />
      </div>
      <div className="component-set-group">
        <div className="statedefault-container">
          <StateWrong10
            propAlignSelf="unset"
            propWidth="276px"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
          />
          <div className="statecorrect-parent">
            <StateWrong10
              propAlignSelf="stretch"
              propWidth="unset"
              propPosition="relative"
              propTop="unset"
              propLeft="unset"
            />
            <StateWrong10 />
          </div>
        </div>
        <GroupComponent1 />
      </div>
    </div>
  );
};

export default MoreGame5;
