import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInSeller.css";

const LogInSeller = () => {
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

  const onRegisterTextClick = useCallback(() => {
    navigate("/registercustomer");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/log-in-customer");
  }, [navigate]);

  const onCustomerTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="log-inseller">
      <div className="frame">
        <img className="frame-child" alt="" src="/rectangle-1.svg" />
        <div className="every-canvass-is">Every canvass is treated special</div>
        <img
          className="a0f1baed2deef692f8b1e0ff257aa0-icon"
          alt=""
          src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
        />
        <img
          className="ec93ad7bbc37008be40f31b11a-1-icon"
          alt=""
          src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
        />
        <div className="artistico">Artisti.co</div>
        <div className="artistico1" onClick={onArtisticoText1Click}>
          Artisti.co
        </div>
        <img className="icon" alt="" src="/3791662200-1@2x.png" />
        <div className="about" onClick={onAboutText1Click}>
          About
        </div>
        <div className="register" onClick={onRegisterTextClick}>
          Register
        </div>
        <div className="log-in">Log In</div>
        <img
          className="c5e55b09cbf0851230bca1247d4442-icon"
          alt=""
          src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
        />
        <img
          className="digital-original-1-icon"
          alt=""
          src="/digitaloriginal-1@2x.png"
        />
        <div className="paintings">Paintings</div>
        <div className="digital-art">Digital Art</div>
        <div className="sculpture">Sculpture</div>
        <div className="frame-item" />
        <img
          className="sunset-watercolor-art-1-icon"
          alt=""
          src="/sunsetwatercolor-art-1@2x.png"
        />
        <div className="rectangle-parent">
          <div className="frame-inner" />
          <div className="rectangle-div" />
          <div className="log-in1">Log In</div>
          <div className="register1">Register</div>
        </div>
        <div className="div">_______________________</div>
        <img
          className="rectangle-icon"
          alt=""
          src="/rectangle-10.svg"
          data-scroll-to="rectangle"
          onClick={onRectangleClick}
        />
        <div className="frame-child1" />
        <div className="customer" onClick={onCustomerTextClick}>
          Customer
        </div>
        <div className="email-address">Email Address:</div>
        <div className="password">Password:</div>
        <div className="div1">_______________________</div>
        <div className="seller">Seller</div>
        <div className="frame-child2" />
        <div className="log-in2">Log In</div>
      </div>
      <div className="frame1">
        <div className="frame-child3" />
        <div className="div2">|</div>
        <div className="about1" data-scroll-to="aboutText">
          About
        </div>
        <div className="this-is-an">
          This is an e-commerce platform for digital arts that will benefit
          those people who are having trouble finding an environment to showcase
          their work of art.
        </div>
        <img
          className="self-painting-home-slider-1-icon"
          alt=""
          src="/selfpaintinghomeslider-1@2x.png"
        />
      </div>
      <div className="frame2">
        <img
          className="instagram-icons-media-youtube-"
          alt=""
          src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
        />
        <div className="privacy-policy">Privacy Policy</div>
        <div className="terms-conditions">{`Terms & Conditions`}</div>
        <div className="all-about-the-container">
          <p className="all-about-the">
            <span>All about the</span>
            <span className="span">{` `}</span>
          </p>
          <p className="creativity">creativity</p>
        </div>
      </div>
    </div>
  );
};

export default LogInSeller;
