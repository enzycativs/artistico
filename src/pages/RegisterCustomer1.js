import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterCustomer1.css";

const RegisterCustomer1 = () => {
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

  const onRectangle4Click = useCallback(() => {
    navigate("/registercustomer1");
  }, [navigate]);

  const onSellerTextClick = useCallback(() => {
    navigate("/registerseller1");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/registercustomer1");
  }, [navigate]);

  return (
    <div className="registercustomer1">
      <div className="frame11">
        <img className="frame-child26" alt="" src="/rectangle-1.svg" />
        <div className="every-canvass-is5">
          Every canvass is treated special
        </div>
        <img
          className="a0f1baed2deef692f8b1e0ff257aa0-icon5"
          alt=""
          src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
        />
        <img
          className="ec93ad7bbc37008be40f31b11a-1-icon5"
          alt=""
          src="/833468ec93ad7bbc37008be40f31b11a-1@2x.png"
        />
        <div className="artistico10">Artisti.co</div>
        <div className="artistico11" onClick={onArtisticoText1Click}>
          Artisti.co
        </div>
        <img className="icon5" alt="" src="/3791662200-1@2x.png" />
        <div className="about10" onClick={onAboutText1Click}>
          About
        </div>
        <div className="register10">Register</div>
        <div className="log-in12" onClick={onLogInTextClick}>
          Log In
        </div>
        <img
          className="c5e55b09cbf0851230bca1247d4442-icon5"
          alt=""
          src="/3c5e55b09cbf0851230bca1247d4442drealisticgreetsculpture-1@2x.png"
        />
        <img
          className="digital-original-1-icon5"
          alt=""
          src="/digitaloriginal-1@2x.png"
        />
        <div className="paintings5">Paintings</div>
        <div className="digital-art5">Digital Art</div>
        <div className="sculpture5">Sculpture</div>
        <div className="frame-child27" />
        <img
          className="sunset-watercolor-art-1-icon5"
          alt=""
          src="/sunsetwatercolor-art-1@2x.png"
        />
        <div className="rectangle-parent1">
          <div className="frame-child28" />
          <div className="frame-child29" />
          <div className="log-in13">Log In</div>
          <div className="register11">Register</div>
          <div className="div17">_______________________</div>
          <div className="frame-child30" onClick={onRectangle4Click} />
        </div>
        <div className="div18">_______________________</div>
        <div className="div19">_______________________</div>
        <div className="div20">_______________________</div>
        <div className="div21">_______________________</div>
        <img className="frame-child31" alt="" src="/rectangle-10.svg" />
        <div className="seller5" onClick={onSellerTextClick}>
          Seller
        </div>
        <div className="frame-child32" />
        <div className="customer5">Customer</div>
        <div className="last-name">Last Name:</div>
        <div className="first-name">First Name:</div>
        <div className="middle-name">Middle Name:</div>
        <div className="address1">Address:</div>
        <div className="contact-number1">Contact Number:</div>
        <div className="email-address3">Email Address:</div>
        <div className="next1" onClick={onNextTextClick}>
          Next
        </div>
        <div className="div22">_______________________</div>
      </div>
      <div className="frame12">
        <div className="frame-child33" />
        <div className="div23">|</div>
        <div className="about11" data-scroll-to="aboutText">
          About
        </div>
        <div className="this-is-an5">
          This is an e-commerce platform for digital arts that will benefit
          those people who are having trouble finding an environment to showcase
          their work of art.
        </div>
        <img
          className="self-painting-home-slider-1-icon5"
          alt=""
          src="/selfpaintinghomeslider-1@2x.png"
        />
      </div>
      <div className="frame13">
        <img
          className="instagram-icons-media-youtube-5"
          alt=""
          src="/74031instagramiconsmediayoutubecomputerfacebooksocial-1@2x.png"
        />
        <div className="privacy-policy5">Privacy Policy</div>
        <div className="terms-conditions5">{`Terms & Conditions`}</div>
        <div className="all-about-the-container5">
          <p className="all-about-the5">
            <span>All about the</span>
            <span className="span5">{` `}</span>
          </p>
          <p className="creativity5">creativity</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer1;
