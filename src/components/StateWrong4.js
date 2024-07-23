import PropTypes from "prop-types";
import "./StateWrong4.css";

const StateWrong4 = ({ className = "" }) => {
  return (
    <div className={`statewrong5 ${className}`}>
      <div className="statewrong-child1" />
      <b className="reduce2">REDUCE</b>
    </div>
  );
};

StateWrong4.propTypes = {
  className: PropTypes.string,
};

export default StateWrong4;
