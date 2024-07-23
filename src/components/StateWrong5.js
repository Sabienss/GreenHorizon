import PropTypes from "prop-types";
import "./StateWrong5.css";

const StateWrong5 = ({ className = "" }) => {
  return (
    <div className={`statewrong4 ${className}`}>
      <div className="statewrong-inner" />
      <b className="reuse3">REUSE</b>
    </div>
  );
};

StateWrong5.propTypes = {
  className: PropTypes.string,
};

export default StateWrong5;
