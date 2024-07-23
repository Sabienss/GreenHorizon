import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <div className="content2">
        <img className="shape-icon" alt="" src="/shape@2x.png" />
        <img
          className="image-13-icon"
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
      </div>
      <div className="green16">green</div>
      <header className="horizons-title-parent">
        <div className="horizons-title">
          <h2 className="rs-reduce-reuse3">3 R’s: Reduce, Reuse, Recycle</h2>
        </div>
        <div className="horizons16"> Horizons</div>
      </header>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
