import StateWrong4 from "./StateWrong4";
import StateWrong5 from "./StateWrong5";
import StateCorrect2 from "./StateCorrect2";
import GroupComponent from "./GroupComponent";
import RecycleOptions from "./RecycleOptions";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`more-game-6-child ${className}`}>
      <div className="frame-parent10">
        <div className="instance-group">
          <StateWrong4 />
          <div className="instance-wrapper1">
            <StateWrong5 />
          </div>
          <StateCorrect2
            propAlignSelf="unset"
            propWidth="276px"
            propFlex="unset"
            propMinWidth="unset"
          />
        </div>
        <div className="frame-wrapper2">
          <div className="component-set-container">
            <GroupComponent />
            <RecycleOptions />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
