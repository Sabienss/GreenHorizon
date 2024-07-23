import PropTypes from "prop-types";
import "./StateWrong7.css";

const StateWrong7 = ({ className = "" }) => {
  return (
    <div className={`statewrong6 ${className}`}>
      <div className="statewrong-child2" />
      <b className="reduce3">REDUCE</b>
    </div>
  );
};

StateWrong7.propTypes = {
  className: PropTypes.string,
};

export default StateWrong7;
