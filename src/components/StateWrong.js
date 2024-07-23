import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong.css";

const StateWrong = ({ className = "", propWidth, propFlex, propMinWidth }) => {
  const stateWrongStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className={`statewrong1 ${className}`} style={stateWrongStyle}>
      <div className="incorrect-target" />
      <b className="reduce">REDUCE</b>
    </div>
  );
};

StateWrong.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateWrong;
