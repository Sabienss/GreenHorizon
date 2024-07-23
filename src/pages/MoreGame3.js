import FrameComponent1 from "../components/FrameComponent1";
import StateCorrect3 from "../components/StateCorrect3";
import ReduceOptions from "../components/ReduceOptions";
import GroupComponent from "../components/GroupComponent";
import RecycleOptions from "../components/RecycleOptions";
import "./MoreGame3.css";

const MoreGame3 = () => {
  return (
    <div className="more-game-3">
      <section className="horizons-frame">
        <div className="horizons5"> Horizons</div>
      </section>
      <div className="rs-reduce-reuse-recycle-parent">
        <h2 className="rs-reduce-reuse">3 R’s: Reduce, Reuse, Recycle</h2>
        <h2 className="eco-game1">ECO GAME</h2>
        <div className="green5">green</div>
      </div>
      <section className="frame-parent1">
        <FrameComponent1 />
        <div className="instance-wrapper">
          <StateCorrect3
            propAlignSelf="stretch"
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
          />
        </div>
      </section>
      <ReduceOptions propWidth="1057px" propPadding="0px 20px 0px 0px" />
      <section className="component-set-parent">
        <GroupComponent />
        <RecycleOptions />
      </section>
    </div>
  );
};

export default MoreGame3;
