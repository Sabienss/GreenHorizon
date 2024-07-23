import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateHover.css";

const StateHover = ({
  className = "",
  propAlignSelf,
  propFlex,
  propHeight,
  propWidth,
  propPadding,
}) => {
  const stateHoverStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      height: propHeight,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propFlex, propHeight, propWidth, propPadding]);

  return (
    <div className={`statehover ${className}`} style={stateHoverStyle}>
      <div className="button4">
        <img className="star-icon1" alt="" src="/star.svg" />
        <div className="button5">Read More</div>
        <img className="x-icon1" alt="" src="/x.svg" />
      </div>
    </div>
  );
};

StateHover.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default StateHover;
