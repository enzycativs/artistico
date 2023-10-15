import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterSeller.css";

const RegisterSeller = () => {
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

  const onCustomerTextClick = useCallback(() => {
    navigate("/registercustomer");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/registerseller");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/registerseller");
  }, [navigate]);

  return (
    <div className="registerseller">
      <div className="frame3">
        <img className="frame-child4" alt="" src="/rectangle-1.svg" />
        <div className="every-canvass-is1">
          Every canvass is treated special
        </div>
        <img
          className="a0f1baed2deef692f8b1e0ff257aa0-icon1"
          alt=""
          src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
        />
        <img
          className="ec93ad7bbc37008be40f31b11a-1-icon1"
          alt=""
          src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
        />
        <div className="artistico2">Artisti.co</div>
        <div className="artistico3" onClick={onArtisticoText1Click}>
          Artisti.co
        </div>
        <img className="icon1" alt="" src="/3791662200-1@2x.png" />
        <div className="about2" onClick={onAboutText1Click}>
          About
        </div>
        <div className="register2">Register</div>
        <div className="log-in3" onClick={onLogInTextClick}>
          Log In
        </div>
        <img
          className="c5e55b09cbf0851230bca1247d4442-icon1"
          alt=""
          src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
        />
        <img
          className="digital-original-1-icon1"
          alt=""
          src="/digitaloriginal-1@2x.png"
        />
        <div className="paintings1">Paintings</div>
        <div className="digital-art1">Digital Art</div>
        <div className="sculpture1">Sculpture</div>
        <div className="frame-child5" />
        <img
          className="sunset-watercolor-art-1-icon1"
          alt=""
          src="/sunsetwatercolor-art-1@2x.png"
        />
        <div className="frame-parent">
          <div className="frame4">
            <div className="log-in4">Log In</div>
          </div>
          <div className="frame5">
            <div className="register3">Register</div>
          </div>
        </div>
        <div className="div3">_______________________</div>
        <div className="div4">_______________________</div>
        <div className="div5">_______________________</div>
        <img className="frame-child6" alt="" src="/rectangle-10.svg" />
        <div className="frame-child7" />
        <div className="customer1" onClick={onCustomerTextClick}>
          Customer
        </div>
        <div className="store-name">Store Name:</div>
        <div className="address">Address:</div>
        <div className="contact-number">Contact Number:</div>
        <div className="email-address1">Email Address:</div>
        <div className="div6">_______________________</div>
        <div className="seller1">Seller</div>
        <div className="frame-child8" onClick={onRectangle4Click} />
        <div className="next" onClick={onNextTextClick}>
          Next
        </div>
      </div>
      <div className="frame6">
        <div className="frame-child9" />
        <div className="div7">|</div>
        <div className="about3" data-scroll-to="aboutText">
          About
        </div>
        <div className="this-is-an1">
          This is an e-commerce platform for digital arts that will benefit
          those people who are having trouble finding an environment to showcase
          their work of art.
        </div>
        <img
          className="self-painting-home-slider-1-icon1"
          alt=""
          src="/selfpaintinghomeslider-1@2x.png"
        />
      </div>
      <div className="frame7">
        <img
          className="instagram-icons-media-youtube-1"
          alt=""
          src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
        />
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="terms-conditions1">{`Terms & Conditions`}</div>
        <div className="all-about-the-container1">
          <p className="all-about-the1">
            <span>All about the</span>
            <span className="span1">{` `}</span>
          </p>
          <p className="creativity1">creativity</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSeller;
