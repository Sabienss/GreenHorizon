import StateCorrect from "./StateCorrect";
import PropTypes from "prop-types";
import "./RecycleOptions.css";

const RecycleOptions = ({ className = "" }) => {
  return (
    <div className={`recycle-options ${className}`}>
      <div className="statedefault-parent1">
        <StateCorrect
          propAlignSelf="unset"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="276px"
        />
        <div className="recycle-feedback">
          <StateCorrect
            propAlignSelf="unset"
            propFlex="1"
            propMinWidth="179px"
            propWidth="unset"
          />
          <div className="recycle-correct1">
            <StateCorrect />
          </div>
        </div>
      </div>
    </div>
  );
};

RecycleOptions.propTypes = {
  className: PropTypes.string,
};

export default RecycleOptions;
