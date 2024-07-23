import StateWrong8 from "../components/StateWrong8";
import StateWrong9 from "../components/StateWrong9";
import StateCorrect4 from "../components/StateCorrect4";
import GroupComponent from "../components/GroupComponent";
import ReduceOptions from "../components/ReduceOptions";
import GroupComponent1 from "../components/GroupComponent1";
import "./MoreGame4.css";

const MoreGame4 = () => {
  return (
    <div className="more-game-4">
      <h2 className="eco-game2">ECO GAME</h2>
      <section className="more-game-4-inner">
        <header className="frame-header">
          <div className="rs-reduce-reuse-recycle-wrapper">
            <h2 className="rs-reduce-reuse1">3 R’s: Reduce, Reuse, Recycle</h2>
          </div>
          <div className="green-group">
            <div className="green6">green</div>
            <div className="horizons6"> Horizons</div>
          </div>
        </header>
      </section>
      <section className="more-game-4-child">
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="image-14-parent">
                <img
                  className="image-14-icon"
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
                <img className="rectangle-icon" alt="" src="/shape@2x.png" />
              </div>
              <StateWrong8
                propPosition="absolute"
                propTop="208px"
                propLeft="297px"
              />
            </div>
            <StateWrong9
              propAlignSelf="unset"
              propPosition="absolute"
              propTop="205px"
              propLeft="573px"
              propWidth="276px"
            />
          </div>
          <div className="instance-container">
            <StateCorrect4
              propAlignSelf="stretch"
              propWidth="unset"
              propFlex="unset"
              propMinWidth="unset"
            />
          </div>
        </div>
      </section>
      <GroupComponent />
      <div className="frame-parent5">
        <ReduceOptions propWidth="471px" propPadding="0px 29px" />
        <GroupComponent1 />
      </div>
    </div>
  );
};

export default MoreGame4;
