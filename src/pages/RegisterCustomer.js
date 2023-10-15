import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterCustomer.css";

const RegisterCustomer = () => {
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

  const onSellerTextClick = useCallback(() => {
    navigate("/registerseller1");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/registercustomer");
  }, [navigate]);

  return (
    <div className="registercustomer">
      <div className="frame8">
        <img className="frame-child13" alt="" src="/rectangle-1.svg" />
        <div className="every-canvass-is3">
          Every canvass is treated special
        </div>
        <img
          className="a0f1baed2deef692f8b1e0ff257aa0-icon3"
          alt=""
          src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
        />
        <img
          className="ec93ad7bbc37008be40f31b11a-1-icon3"
          alt=""
          src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
        />
        <div className="artistico6">Artisti.co</div>
        <div className="artistico7" onClick={onArtisticoText1Click}>
          Artisti.co
        </div>
        <img className="icon3" alt="" src="/3791662200-1@2x.png" />
        <div className="about6" onClick={onAboutText1Click}>
          About
        </div>
        <div className="register6">Register</div>
        <div className="log-in7" onClick={onLogInTextClick}>
          Log In
        </div>
        <img
          className="c5e55b09cbf0851230bca1247d4442-icon3"
          alt=""
          src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
        />
        <img
          className="digital-original-1-icon3"
          alt=""
          src="/digitaloriginal-1@2x.png"
        />
        <div className="paintings3">Paintings</div>
        <div className="digital-art3">Digital Art</div>
        <div className="sculpture3">Sculpture</div>
        <div className="frame-child14" />
        <img
          className="sunset-watercolor-art-1-icon3"
          alt=""
          src="/sunsetwatercolor-art-1@2x.png"
        />
        <div className="rectangle-container">
          <div className="frame-child15" />
          <div className="frame-child16" />
          <div className="log-in8">Log In</div>
          <div className="register7">Register</div>
          <div className="div11">_______________________</div>
          <div className="frame-child17" />
        </div>
        <img className="frame-child18" alt="" src="/rectangle-10.svg" />
        <div className="seller3" onClick={onSellerTextClick}>
          Seller
        </div>
        <div className="frame-child19" />
        <div className="customer3">Customer</div>
        <div className="create-password1">Create Password:</div>
        <div className="confirm-password1">Confirm Password:</div>
        <div className="confirm2">
          <p className="confirm3">Confirm</p>
        </div>
        <div className="div12">_______________________</div>
        <div className="frame-child20" />
        <div className="back1" onClick={onBackTextClick}>
          Back
        </div>
      </div>
      <div className="frame9">
        <div className="frame-child21" />
        <div className="div13">|</div>
        <div className="about7" data-scroll-to="aboutText">
          About
        </div>
        <div className="this-is-an3">
          This is an e-commerce platform for digital arts that will benefit
          those people who are having trouble finding an environment to showcase
          their work of art.
        </div>
        <img
          className="self-painting-home-slider-1-icon3"
          alt=""
          src="/selfpaintinghomeslider-1@2x.png"
        />
      </div>
      <div className="frame10">
        <img
          className="instagram-icons-media-youtube-3"
          alt=""
          src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
        />
        <div className="privacy-policy3">Privacy Policy</div>
        <div className="terms-conditions3">{`Terms & Conditions`}</div>
        <div className="all-about-the-container3">
          <p className="all-about-the3">
            <span>All about the</span>
            <span className="span3">{` `}</span>
          </p>
          <p className="confirm3">creativity</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;
