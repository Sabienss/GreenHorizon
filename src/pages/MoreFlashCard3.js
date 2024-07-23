import StateHover from "../components/StateHover";
import "./MoreFlashCard3.css";

const MoreFlashCard3 = () => {
  return (
    <div className="more-flash-card-4">
      <section className="frame-section">
        <div className="image-11-parent">
          <img className="image-11-icon" alt="" src="/image-8@2x.png" />
          <div className="green4">green</div>
        </div>
        <img className="frame-child5" alt="" src="/group-42@2x.png" />
        <div className="group-div">
          <img className="frame-child6" alt="" src="/group-5@2x.png" />
          <img
            className="inner-rect-icon"
            loading="lazy"
            alt=""
            src="/23182205@2x.png"
          />
        </div>
      </section>
      <section className="horizons4"> Horizons</section>
      <div className="button-container">
        <StateHover
          propAlignSelf="unset"
          propFlex="unset"
          propHeight="12px"
          propWidth="137px"
          propPadding="0px 0px 0px"
        />
      </div>
    </div>
  );
};

export default MoreFlashCard3;
