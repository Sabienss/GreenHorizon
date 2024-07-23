import { useMemo } from "react";
import StateWrong from "./StateWrong";
import PropTypes from "prop-types";
import "./ReduceOptions.css";

const ReduceOptions = ({ className = "", propWidth, propPadding }) => {
  const reduceOptionsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className={`reduce-options ${className}`} style={reduceOptionsStyle}>
      <div className="statedefault-parent2">
        <StateWrong propWidth="276px" propFlex="unset" propMinWidth="unset" />
        <div className="reduce-feedback">
          <div className="reduce-correct">
            <StateWrong
              propWidth="276px"
              propFlex="unset"
              propMinWidth="unset"
            />
          </div>
          <StateWrong />
        </div>
      </div>
    </div>
  );
};

ReduceOptions.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default ReduceOptions;
