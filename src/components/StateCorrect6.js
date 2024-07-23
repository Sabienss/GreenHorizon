import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect6.css";

const StateCorrect6 = ({ className = "", propPosition, propTop, propLeft }) => {
  const stateCorrect5Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className={`statecorrect5 ${className}`} style={stateCorrect5Style}>
      <div className="statecorrect-child2" />
      <b className="reuse6">REUSE</b>
    </div>
  );
};

StateCorrect6.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default StateCorrect6;
