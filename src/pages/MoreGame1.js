import FrameComponent from "../components/FrameComponent";
import StateWrong3 from "../components/StateWrong3";
import StateWrong2 from "../components/StateWrong2";
import StateCorrect1 from "../components/StateCorrect1";
import ReduceOptions from "../components/ReduceOptions";
import GroupComponent from "../components/GroupComponent";
import "./MoreGame1.css";

const MoreGame1 = () => {
  return (
    <div className="more-game-5">
      <section className="more-game-5-inner">
        <FrameComponent />
      </section>
      <section className="actions-container-wrapper">
        <div className="actions-container">
          <div className="actions-choice">
            <div className="instance-parent">
              <StateWrong3
                propWidth="unset"
                propFlex="1"
                propMinWidth="207px"
              />
              <StateWrong2
                propAlignSelf="unset"
                propFlex="1"
                propMinWidth="207px"
              />
              <StateCorrect1
                propAlignSelf="unset"
                propFlex="1"
                propMinWidth="207px"
              />
            </div>
          </div>
          <div className="reduce-component">
            <ReduceOptions propWidth="471px" propPadding="0px 29px" />
            <div className="recycle-default-parent">
              <div className="recycle-default">
                <StateCorrect1
                  propAlignSelf="unset"
                  propFlex="1"
                  propMinWidth="unset"
                />
              </div>
              <div className="recycle-wrong-correct">
                <StateCorrect1
                  propAlignSelf="unset"
                  propFlex="1"
                  propMinWidth="179px"
                />
                <div className="recycle-correct">
                  <StateCorrect1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GroupComponent />
    </div>
  );
};

export default MoreGame1;
