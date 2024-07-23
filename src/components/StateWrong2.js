import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateWrong2.css";

const StateWrong2 = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const stateWrong2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div className={`statewrong3 ${className}`} style={stateWrong2Style}>
      <div className="statewrong-item" />
      <b className="reuse2">REUSE</b>
    </div>
  );
};

StateWrong2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default StateWrong2;
