import StateWrong from "./StateWrong";
import StateWrong1 from "./StateWrong1";
import StateCorrect from "./StateCorrect";
import GroupComponent from "./GroupComponent";
import RecycleOptions from "./RecycleOptions";
import PropTypes from "prop-types";
import "./Interactions.css";

const Interactions = ({ className = "" }) => {
  return (
    <section className={`interactions ${className}`}>
      <div className="reduce-recycle">
        <div className="drag-target">
          <div className="dropzone">
            <StateWrong propWidth="unset" propFlex="1" propMinWidth="207px" />
            <div className="reuse1">
              <StateWrong1 />
            </div>
            <StateCorrect
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="207px"
              propWidth="unset"
            />
          </div>
        </div>
        <div className="reuse-options">
          <GroupComponent />
          <RecycleOptions />
        </div>
      </div>
    </section>
  );
};

Interactions.propTypes = {
  className: PropTypes.string,
};

export default Interactions;
