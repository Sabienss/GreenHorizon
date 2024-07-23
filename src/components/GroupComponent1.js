import StateCorrect4 from "./StateCorrect4";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`statedefault-parent3 ${className}`}>
      <StateCorrect4
        propAlignSelf="unset"
        propWidth="276px"
        propFlex="unset"
        propMinWidth="unset"
      />
      <div className="statewrong-parent">
        <StateCorrect4
          propAlignSelf="unset"
          propWidth="unset"
          propFlex="1"
          propMinWidth="179px"
        />
        <div className="statecorrect-container">
          <StateCorrect4 />
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
