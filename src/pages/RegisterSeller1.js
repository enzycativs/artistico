import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterSeller1.css";

const RegisterSeller1 = () => {
  const navigate = useNavigate();

  const onArtisticoText1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLogInTextClick = useCallback(() => {
    navigate("/log-in-customer");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/registerseller1");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/registerseller1");
  }, [navigate]);

  const onCustomerTextClick = useCallback(() => {
    navigate("/registerseller1");
  }, [navigate]);

  return (
    <div className="registerseller1">
      <div className="registerseller-child" />
      <img
        className="instagram-icons-media-youtube-2"
        alt=""
        src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
      />
      <div className="privacy-policy2">Privacy Policy</div>
      <div className="terms-conditions2">{`Terms & Conditions`}</div>
      <div className="all-about-the-container2">
        <p className="all-about-the2">
          <span>All about the</span>
          <span className="span2">{` `}</span>
        </p>
        <p className="creativity2">creativity</p>
      </div>
      <div className="registerseller-item" />
      <img className="registerseller-inner" alt="" src="/rectangle-1.svg" />
      <div className="div8">|</div>
      <div className="about4" data-scroll-to="aboutText">
        About
      </div>
      <div className="this-is-an2">
        This is an e-commerce platform for digital arts that will benefit those
        people who are having trouble finding an environment to showcase their
        work of art.
      </div>
      <img
        className="self-painting-home-slider-1-icon2"
        alt=""
        src="/selfpaintinghomeslider-1@2x.png"
      />
      <div className="every-canvass-is2">Every canvass is treated special</div>
      <img
        className="a0f1baed2deef692f8b1e0ff257aa0-icon2"
        alt=""
        src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
      />
      <img
        className="ec93ad7bbc37008be40f31b11a-1-icon2"
        alt=""
        src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
      />
      <div className="artistico4">Artisti.co</div>
      <div className="artistico5" onClick={onArtisticoText1Click}>
        Artisti.co
      </div>
      <img className="icon2" alt="" src="/3791662200-1@2x.png" />
      <div className="about5" onClick={onAboutText1Click}>
        About
      </div>
      <div className="register4">Register</div>
      <div className="log-in5" onClick={onLogInTextClick}>
        Log In
      </div>
      <img
        className="c5e55b09cbf0851230bca1247d4442-icon2"
        alt=""
        src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
      />
      <img
        className="digital-original-1-icon2"
        alt=""
        src="/digitaloriginal-1@2x.png"
      />
      <div className="paintings2">Paintings</div>
      <div className="digital-art2">Digital Art</div>
      <div className="sculpture2">Sculpture</div>
      <div className="registerseller-child1" />
      <img
        className="sunset-watercolor-art-1-icon2"
        alt=""
        src="/sunsetwatercolor-art-1@2x.png"
      />
      <div className="rectangle-group">
        <div className="frame-child10" />
        <div className="frame-child11" />
        <div className="log-in6">Log In</div>
        <div className="register5">Register</div>
        <div className="div9">_______________________</div>
        <div className="frame-child12" />
      </div>
      <div className="registerseller-child2" onClick={onRectangle7Click} />
      <div className="back" onClick={onBackTextClick}>
        Back
      </div>
      <img className="registerseller-child3" alt="" src="/rectangle-10.svg" />
      <div className="registerseller-child4" />
      <div className="customer2" onClick={onCustomerTextClick}>
        Customer
      </div>
      <div className="create-password">Create Password:</div>
      <div className="confirm-password">Confirm Password:</div>
      <div className="confirm">
        <p className="creativity2">Confirm</p>
      </div>
      <div className="div10">_______________________</div>
      <div className="seller2">Seller</div>
    </div>
  );
};

export default RegisterSeller1;
