import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect3.css";

const StateCorrect3 = ({
  className = "",
  propAlignSelf,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const stateCorrect3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propFlex, propMinWidth]);

  return (
    <div className={`statecorrect3 ${className}`} style={stateCorrect3Style}>
      <div className="statecorrect-inner" />
      <b className="recycle3">RECYCLE</b>
    </div>
  );
};

StateCorrect3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateCorrect3;
