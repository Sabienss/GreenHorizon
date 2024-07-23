import StateWrong7 from "./StateWrong7";
import StateWrong6 from "./StateWrong6";
import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`image-12-parent ${className}`}>
      <img
        className="image-12-icon"
        loading="lazy"
        alt=""
        src="/image-12@2x.png"
      />
      <div className="rectangle-container">
        <img className="frame-child9" alt="" src="/shape@2x.png" />
        <StateWrong7 />
      </div>
      <StateWrong6
        propAlignSelf="unset"
        propPosition="absolute"
        propWidth="276px"
        propMargin="0 !important"
        propRight="-100px"
        propBottom="14px"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
