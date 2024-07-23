import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong10.css";

const StateWrong10 = ({
  className = "",
  propAlignSelf,
  propWidth,
  propPosition,
  propTop,
  propLeft,
}) => {
  const stateWrong6Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propAlignSelf, propWidth, propPosition, propTop, propLeft]);

  return (
    <div className={`statewrong10 ${className}`} style={stateWrong6Style}>
      <div className="statewrong-child6" />
      <b className="reduce5">REDUCE</b>
    </div>
  );
};

StateWrong10.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default StateWrong10;
