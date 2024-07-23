import MenuBarDefault1 from "../components/MenuBarDefault1";
import Button from "../components/Button";
import StateHover from "../components/StateHover";
import MenuBarDefault from "../components/MenuBarDefault";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="rect-parent">
        <img
          className="rect-icon"
          loading="lazy"
          alt=""
          src="/4286865-4@2x.png"
        />
        <div className="content-rect" />
      </section>
      <section className="menu-bardefault-parent">
        <MenuBarDefault1 />
        <div className="frame-wrapper">
          <div className="frame-parent">
            <div className="welcome-to-green-horizon-parent">
              <h1 className="welcome-to-green-container">
                <p className="welcome-to">Welcome to</p>
                <p className="green-horizon">Green Horizon!</p>
              </h1>
              <div className="join-us-in-advocating-for-resp-wrapper">
                <h1 className="join-us-in">
                  Join us in advocating for responsible consumption and
                  conservation to safeguard our planet's health and
                  biodiversity.
                </h1>
              </div>
            </div>
            <div className="button-wrapper">
              <Button />
            </div>
          </div>
        </div>
      </section>
      <div className="button">
        <StateHover
          propAlignSelf="unset"
          propFlex="unset"
          propHeight="48px"
          propWidth="137px"
          propPadding="unset"
        />
        <div className="statehover-wrapper">
          <StateHover />
        </div>
      </div>
      <MenuBarDefault />
    </div>
  );
};

export default HomePage;
