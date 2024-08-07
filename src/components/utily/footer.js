import React from "react";
import "./footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div className="footer flex container">
      <h2>Find Us on Social Network</h2>
      <div className="container social-container">
        <div className="box flex">
          <div className="social flex">
            <Zoom duration={1000} delay={100}>
              <a className="facebook soc3" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
            </Zoom>
            <Zoom duration={1000} delay={100}>
              <a className="instagram soc2" href="">
                <i className="fab fa-instagram-square"></i>
              </a>
            </Zoom>
            <Zoom duration={1000} delay={100}>
              <a className="twitter soc1" href="">
                <i className="fab fa-twitter "></i>
              </a>
            </Zoom>
            <Zoom duration={1000} delay={100}>
              <a className="youtube soc4" href="">
                <i className="fab fa-youtube "></i>
              </a>
            </Zoom>
            <Zoom duration={1000} delay={100}>
              <a className="youtube soc5" href="">
                <i className="fab fa-whatsapp "></i>
              </a>
            </Zoom>
          </div>
        </div>
      </div>
      <p className="copyright">&copy;2024 All Right Reserved</p>
    </div>
  );
};

export default Footer;
