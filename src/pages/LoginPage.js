import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onAboutText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRegisterTextClick = useCallback(() => {
    navigate("/registercustomer");
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/log-in-customer");
  }, [navigate]);

  return (
    <div className="login-page">
      <div className="login-page-child" />
      <img
        className="instagram-icons-media-youtube-6"
        alt=""
        src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
      />
      <div className="privacy-policy6">Privacy Policy</div>
      <div className="terms-conditions6">{`Terms & Conditions`}</div>
      <div className="all-about-the-container6">
        <p className="all-about-the6">
          <span>All about the</span>
          <span className="span6">{` `}</span>
        </p>
        <p className="creativity6">creativity</p>
      </div>
      <div className="login-page-item" />
      <img className="login-page-inner" alt="" src="/rectangle-1.svg" />
      <div className="div24">|</div>
      <div className="about12" data-scroll-to="aboutText">
        About
      </div>
      <div className="this-is-an6">
        This is an e-commerce platform for digital arts that will benefit those
        people who are having trouble finding an environment to showcase their
        work of art.
      </div>
      <img
        className="self-painting-home-slider-1-icon6"
        alt=""
        src="/selfpaintinghomeslider-1@2x.png"
      />
      <div className="every-canvass-is6">Every canvass is treated special</div>
      <img
        className="a0f1baed2deef692f8b1e0ff257aa0-icon6"
        alt=""
        src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
      />
      <img
        className="ec93ad7bbc37008be40f31b11a-1-icon6"
        alt=""
        src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
      />
      <div className="artistico12">Artisti.co</div>
      <div className="artistico13">Artisti.co</div>
      <img className="icon6" alt="" src="/3791662200-1@2x.png" />
      <div className="about13" onClick={onAboutText1Click}>
        About
      </div>
      <div className="register12" onClick={onRegisterTextClick}>
        Register
      </div>
      <div className="log-in14" onClick={onLogInTextClick}>
        Log In
      </div>
      <img
        className="c5e55b09cbf0851230bca1247d4442-icon6"
        alt=""
        src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
      />
      <img
        className="digital-original-1-icon6"
        alt=""
        src="/digitaloriginal-1@2x.png"
      />
      <div className="paintings6">Paintings</div>
      <div className="digital-art6">Digital Art</div>
      <div className="sculpture6">Sculpture</div>
      <div className="login-page-child1" />
      <img
        className="sunset-watercolor-art-1-icon6"
        alt=""
        src="/sunsetwatercolor-art-1@2x.png"
      />
    </div>
  );
};

export default LoginPage;
