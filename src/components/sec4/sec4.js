import React from "react";
import img1 from "../../images/66.jpg";
import "./sec4.css";
import Fade from "react-reveal/Fade";
const Sec4 = () => {
  return (
    <div className="container sec4">
      <h1>TESTIMONIALS</h1>
      <div className="flex sec4-container">
        <Fade left duration={2000} delay={500}>
          <div className="hs-image1">
            <img src={img1} alt="" />
          </div>
        </Fade>
        <Fade right duration={2000} delay={500}>
          <div className="flex sec4-text">
            <div className="flex sec4-det">
              <div className="flex">
                <h2>"</h2>
                <p>
                  In mauris massa, ultricies cursus facilisis vitae, aliquet id
                  diam. Curabitur eleifend ligula in ultricies lobortis. Donec
                  bibendum a elit in blandit. Suspendisse quis aliquam velit, in
                  laoreet felis.
                </p>
              </div>
              <h3>Eva Savits</h3>
            </div>
            <div className="flex sec4-det">
              <div className="flex">
                <h2>"</h2>
                <p>
                  Curabitur eleifend ligula lobortis. Donec bibendum a elit in
                  blandit. Suspendisse Pellentesque habitant morbi tristique
                  senectus et netus et malesua
                </p>
              </div>
              <h3>Gloria Mann</h3>
            </div>
            <div className="flex sec4-det">
              <div className="flex">
                <h2>"</h2>
                <p>
                  Donec bibendum a elit in blandit. Suspendisse qu is aliquam
                  velit, in laoreet felis. Pellentesque habitant morbi tristique
                  senectus et netus et males uada fames ac turpis egestas.
                  Mauris
                </p>
              </div>
              <h3>Camala Haddon</h3>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Sec4;
