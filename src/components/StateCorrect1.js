import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect1.css";

const StateCorrect1 = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const stateCorrect1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div className={`statecorrect1 ${className}`} style={stateCorrect1Style}>
      <div className="statecorrect-child" />
      <b className="recycle1">RECYCLE</b>
    </div>
  );
};

StateCorrect1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateCorrect1;
