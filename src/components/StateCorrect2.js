import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect2.css";

const StateCorrect2 = ({
  className = "",
  propAlignSelf,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const stateCorrect2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propFlex, propMinWidth]);

  return (
    <div className={`statecorrect2 ${className}`} style={stateCorrect2Style}>
      <div className="statecorrect-item" />
      <b className="recycle2">RECYCLE</b>
    </div>
  );
};

StateCorrect2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateCorrect2;
