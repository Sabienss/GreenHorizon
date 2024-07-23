import PropTypes from "prop-types";
import "./GameTitle.css";

const GameTitle = ({ className = "" }) => {
  return (
    <section className={`game-title ${className}`}>
      <div className="game-title-inner">
        <div className="green-parent4">
          <a className="green18">green</a>
          <a className="horizons18"> Horizons</a>
        </div>
      </div>
      <div className="rs-reduce-reuse-recycle-container">
        <h2 className="rs-reduce-reuse5">3 R’s: Reduce, Reuse, Recycle</h2>
        <div className="eco-game-container">
          <h2 className="eco-game5">ECO GAME</h2>
        </div>
      </div>
      <div className="image-16-parent">
        <img
          className="image-16-icon"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
        />
        <img className="image-border-icon" alt="" src="/shape@2x.png" />
      </div>
    </section>
  );
};

GameTitle.propTypes = {
  className: PropTypes.string,
};

export default GameTitle;
