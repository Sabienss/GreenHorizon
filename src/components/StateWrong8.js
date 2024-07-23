import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong8.css";

const StateWrong8 = ({ className = "", propPosition, propTop, propLeft }) => {
  const stateWrong5Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className={`statewrong9 ${className}`} style={stateWrong5Style}>
      <div className="statewrong-child5" />
      <b className="reduce4">REDUCE</b>
    </div>
  );
};

StateWrong8.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default StateWrong8;
