import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ className = "" }) => {
  return (
    <button className={`button1 ${className} parallax-effect`}>
      <div className="button2">
        <img className="star-icon" alt="" src="/star.svg" />
        <div className="button3">Read More</div>
        <img className="x-icon" alt="" src="/x.svg" />
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;