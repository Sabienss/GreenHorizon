import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect.css";

const StateCorrect = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const stateCorrectStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth, propWidth]);

  return (
    <div className={`statecorrect ${className}`} style={stateCorrectStyle}>
      <div className="correct-highlight" />
      <b className="recycle">RECYCLE</b>
    </div>
  );
};

StateCorrect.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default StateCorrect;
