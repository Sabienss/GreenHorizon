import PropTypes from "prop-types";
import "./MenuBarDefault1.css";

const MenuBarDefault1 = ({ className = "" }) => {
  return (
    <div className={`menu-bardefault ${className}`}>
      <div className="menu-title">
        <h1 className="green14">green</h1>
        <h1 className="horizons14"> Horizons</h1>
      </div>
      <header className="menu-items">
        <nav className="menu-items1">
          <div className="menu-item">
            <a className="home">Home</a>
          </div>
          <div className="menu-item1">
            <a className="about-us">About us</a>
          </div>
          <div className="menu-item2">
            <a className="more">More</a>
          </div>
          <div className="menu-item3">
            <div className="contact-us">Contact us</div>
          </div>
        </nav>
      </header>
    </div>
  );
};

MenuBarDefault1.propTypes = {
  className: PropTypes.string,
};

export default MenuBarDefault1;
