import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GreenHorizonsContent.css";

const GreenHorizonsContent = ({
  className = "",
  greenHorizon,
  advocatingForACleanerPlan,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const greenHorizonsContentStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`green-horizons-content ${className}`}
      style={greenHorizonsContentStyle}
    >
      <div className="green-horizon-image">
        <img className="image-26-icon" alt="" src="/image-26@2x.png" />
        <b className="green-horizon1">{greenHorizon}</b>
        <div className="advocating-cleaner-planet">
          <div className="advocating-for-a">{advocatingForACleanerPlan}</div>
        </div>
      </div>
    </div>
  );
};

GreenHorizonsContent.propTypes = {
  className: PropTypes.string,
  greenHorizon: PropTypes.string,
  advocatingForACleanerPlan: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GreenHorizonsContent;
