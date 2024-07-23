import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong9.css";

const StateWrong9 = ({
  className = "",
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const stateWrong4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <div className={`statewrong8 ${className}`} style={stateWrong4Style}>
      <div className="statewrong-child4" />
      <b className="reuse5">REUSE</b>
    </div>
  );
};

StateWrong9.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default StateWrong9;
