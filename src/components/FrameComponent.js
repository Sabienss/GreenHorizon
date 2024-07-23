import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent9 ${className}`}>
      <div className="green-parent3">
        <a className="green17">green</a>
        <a className="horizons17"> Horizons</a>
        <div className="image-15-parent">
          <img
            className="image-15-icon"
            loading="lazy"
            alt=""
            src="/image-15@2x.png"
          />
          <img className="frame-child8" alt="" src="/shape@2x.png" />
        </div>
      </div>
      <div className="frame-wrapper1">
        <div className="rs-reduce-reuse-recycle-group">
          <h2 className="rs-reduce-reuse4">3 R’s: Reduce, Reuse, Recycle</h2>
          <div className="eco-game-wrapper">
            <h2 className="eco-game4">ECO GAME</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
