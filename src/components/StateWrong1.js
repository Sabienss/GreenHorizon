import PropTypes from "prop-types";
import "./StateWrong1.css";

const StateWrong1 = ({ className = "" }) => {
  return (
    <div className={`statewrong ${className}`}>
      <div className="highlight" />
      <b className="reuse">REUSE</b>
    </div>
  );
};

StateWrong1.propTypes = {
  className: PropTypes.string,
};

export default StateWrong1;
