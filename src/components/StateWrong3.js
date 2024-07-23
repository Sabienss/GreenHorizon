import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong3.css";

const StateWrong3 = ({ className = "", propWidth, propFlex, propMinWidth }) => {
  const stateWrong1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className={`statewrong2 ${className}`} style={stateWrong1Style}>
      <div className="statewrong-child" />
      <b className="reduce1">REDUCE</b>
    </div>
  );
};

StateWrong3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateWrong3;
