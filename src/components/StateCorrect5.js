import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateCorrect5.css";

const StateCorrect5 = ({
  className = "",
  propAlignSelf,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const stateCorrect6Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propFlex, propMinWidth]);

  return (
    <div className={`statecorrect6 ${className}`} style={stateCorrect6Style}>
      <div className="recycle-correct-box" />
      <b className="recycle5">RECYCLE</b>
    </div>
  );
};

StateCorrect5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateCorrect5;
