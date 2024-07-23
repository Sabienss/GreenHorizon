import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong6.css";

const StateWrong6 = ({
  className = "",
  propAlignSelf,
  propPosition,
  propWidth,
  propMargin,
  propRight,
  propBottom,
}) => {
  const stateWrong3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      width: propWidth,
      margin: propMargin,
      right: propRight,
      bottom: propBottom,
    };
  }, [
    propAlignSelf,
    propPosition,
    propWidth,
    propMargin,
    propRight,
    propBottom,
  ]);

  return (
    <div className={`statewrong7 ${className}`} style={stateWrong3Style}>
      <div className="statewrong-child3" />
      <b className="reuse4">REUSE</b>
    </div>
  );
};

StateWrong6.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPosition: PropTypes.any,
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propRight: PropTypes.any,
  propBottom: PropTypes.any,
};

export default StateWrong6;
