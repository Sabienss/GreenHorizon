import StateWrong1 from "./StateWrong1";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`reuse-default-parent ${className}`}>
      <div className="reuse-default">
        <StateWrong1 />
        <StateWrong1 />
      </div>
      <div className="reuse-incorrect">
        <StateWrong1 />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
