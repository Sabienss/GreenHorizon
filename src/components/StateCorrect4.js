import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect4.css";

const StateCorrect4 = ({
  className = "",
  propAlignSelf,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const stateCorrect4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propFlex, propMinWidth]);

  return (
    <div className={`statecorrect4 ${className}`} style={stateCorrect4Style}>
      <div className="statecorrect-child1" />
      <b className="recycle4">RECYCLE</b>
    </div>
  );
};

StateCorrect4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateCorrect4;
