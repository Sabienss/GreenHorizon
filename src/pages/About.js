import GreenHorizonsContent from "../components/GreenHorizonsContent";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="green-container">
        <a className="green12">green</a>
        <a className="horizons12"> Horizons</a>
      </section>
      <section className="pexels-minan-images">
        <img
          className="pexels-minan1398-1131458-icon"
          alt=""
          src="/pexelsminan13981131458@2x.png"
        />
        <img
          className="pexels-minan1398-1131458-icon1"
          alt=""
          src="/pexelsminan13981131458-1@2x.png"
        />
        <img
          className="pexels-minan1398-1131458-icon2"
          alt=""
          src="/pexelsminan13981131458-2@2x.png"
        />
        <img
          className="pexels-minan1398-1131458-icon3"
          alt=""
          src="/pexelsminan13981131458-3@2x.png"
        />
        <img
          className="pexels-minan1398-1131458-icon4"
          alt=""
          src="/pexelsminan13981131458-4@2x.png"
        />
      </section>
      <div className="green-horizons-content-parent">
        <GreenHorizonsContent
          greenHorizon="Green Horizon"
          advocatingForACleanerPlan="Advocating for a cleaner planet through waste awareness."
        />
        <div className="focus-content">
          <img className="image-29-icon" alt="" src="/image-26@2x.png" />
          <b className="focus">Focus</b>
          <div className="addressing-pollution">
            <div className="addressing-plastic-pollution">
              Addressing plastic pollution in oceans and landfill impacts.
            </div>
          </div>
        </div>
      </div>
      <GreenHorizonsContent
        greenHorizon="Mission"
        advocatingForACleanerPlan="Promote sustainable consumption and responsible disposal."
        propFlex="unset"
        propMinWidth="unset"
        propWidth="311px"
      />
      <div className="goals-content">
        <div className="goals-description">
          <img
            className="image-30-icon"
            loading="lazy"
            alt=""
            src="/image-26@2x.png"
          />
          <b className="goals">Goals</b>
          <div className="protect-and-preserve">
            Protect and preserve natural resources for future generations..
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
