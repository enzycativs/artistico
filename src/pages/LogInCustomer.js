import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInCustomer.css";

const LogInCustomer = () => {
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

  const onRectangle8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSellerTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in-customer">
      <div className="log-in-customer-child" />
      <img
        className="instagram-icons-media-youtube-4"
        alt=""
        src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
      />
      <div className="privacy-policy4">Privacy Policy</div>
      <div className="terms-conditions4">{`Terms & Conditions`}</div>
      <div className="all-about-the-container4">
        <p className="all-about-the4">
          <span>All about the</span>
          <span className="span4">{` `}</span>
        </p>
        <p className="creativity4">creativity</p>
      </div>
      <div className="log-in-customer-item" />
      <img className="log-in-customer-inner" alt="" src="/rectangle-1.svg" />
      <div className="div14">|</div>
      <div className="about8" data-scroll-to="aboutText">
        About
      </div>
      <div className="this-is-an4">
        This is an e-commerce platform for digital arts that will benefit those
        people who are having trouble finding an environment to showcase their
        work of art.
      </div>
      <img
        className="self-painting-home-slider-1-icon4"
        alt=""
        src="/selfpaintinghomeslider-1@2x.png"
      />
      <div className="every-canvass-is4">Every canvass is treated special</div>
      <img
        className="a0f1baed2deef692f8b1e0ff257aa0-icon4"
        alt=""
        src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
      />
      <img
        className="ec93ad7bbc37008be40f31b11a-1-icon4"
        alt=""
        src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
      />
      <div className="artistico8">Artisti.co</div>
      <div className="artistico9" onClick={onArtisticoText1Click}>
        Artisti.co
      </div>
      <img className="icon4" alt="" src="/3791662200-1@2x.png" />
      <div className="about9" onClick={onAboutText1Click}>
        About
      </div>
      <div className="register8" onClick={onRegisterTextClick}>
        Register
      </div>
      <div className="log-in9">Log In</div>
      <img
        className="c5e55b09cbf0851230bca1247d4442-icon4"
        alt=""
        src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
      />
      <img
        className="digital-original-1-icon4"
        alt=""
        src="/digitaloriginal-1@2x.png"
      />
      <div className="paintings4">Paintings</div>
      <div className="digital-art4">Digital Art</div>
      <div className="sculpture4">Sculpture</div>
      <div className="log-in-customer-child1" />
      <img
        className="sunset-watercolor-art-1-icon4"
        alt=""
        src="/sunsetwatercolor-art-1@2x.png"
      />
      <div className="frame-div">
        <div className="frame-child22" />
        <div className="frame-child23" />
        <div className="frame-child24" />
        <div className="log-in10">Log In</div>
        <div className="div15">_______________________</div>
        <div className="frame-child25" />
        <div className="register9">Register</div>
      </div>
      <img
        className="log-in-customer-child2"
        alt=""
        src="/rectangle-10.svg"
        onClick={onRectangle8Click}
      />
      <div className="seller4" onClick={onSellerTextClick}>
        Seller
      </div>
      <div className="log-in-customer-child3" />
      <div className="customer4">Customer</div>
      <div className="email-address2">Email Address:</div>
      <div className="password1">Password:</div>
      <div className="log-in11">Log In</div>
      <div className="div16">_______________________</div>
    </div>
  );
};

export default LogInCustomer;
