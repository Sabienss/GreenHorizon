import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MoreFlashCard.css";

const MoreFlashCard = () => {
  const navigate = useNavigate();

  const onMoreFlashCardClick = useCallback(() => {
    navigate("/moretrash-talk-4");
  }, [navigate]);

  return (
    <div className="more-flash-card-1" onClick={onMoreFlashCardClick}>
      <section className="frame-container">
        <div className="image-8-parent">
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <a className="green1">green</a>
          <div className="horizons1"> Horizons</div>
        </div>
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-1@2x.png"
        />
      </section>
      <section className="flash-cards-environmental-imp-wrapper">
        <div className="flash-cards-environmental-container">
          <p className="flash-cards">
            <b>Flash Cards:</b>
          </p>
          <p className="environmental">{`Environmental `}</p>
          <p className="impact">{`Impact `}</p>
          <p className="essentials">Essentials</p>
        </div>
      </section>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <img className="icon" alt="" src="/440474661@2x.png" />
        <div className="polluting-our-waterways-pollu-wrapper">
          <div className="polluting-our-waterways-container">
            <p className="polluting-our-waterways">"Polluting Our Waterways"</p>
            <p className="blank-line">
              <b>&nbsp;</b>
            </p>
            <p className="polluted-water-threatens-ecosy">
              <b>
                Polluted water threatens ecosystems, harms wildlife, and
                jeopardizes public health. Efforts to reduce industrial runoff
                and promote responsible waste disposal are crucial for
                safeguarding our water resources. Let's take action to preserve
                clean water for future generations.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFlashCard;
