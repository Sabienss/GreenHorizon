import PropTypes from "prop-types";
import "./MenuBarDefault.css";

const MenuBarDefault = ({ className = "" }) => {
  return (
    <section className={`menu-bardefault1 ${className}`}>
      <div className="green-parent2">
        <h1 className="green15">green</h1>
        <h1 className="horizons15"> Horizons</h1>
      </div>
      <div className="menu-items2">
        <div className="all-menu-items">
          <div className="menu-item4">
            <div className="home1">Home</div>
          </div>
          <div className="menu-item5">
            <div className="about-us1">About us</div>
          </div>
          <div className="menu-item6">
            <div className="more1">More</div>
          </div>
          <div className="menu-item7">
            <div className="contact-us1">Contact us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

MenuBarDefault.propTypes = {
  className: PropTypes.string,
};

export default MenuBarDefault;
