import React from "react";
import img1 from "../../images/55.jpg";
import "./history.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const History = () => {
  return (
    <div className="history">
      <div className="flex container title">
        <Fade left duration={2000} delay={500}>
          <div className="hs-image">
            <img src={img1} alt="" />
          </div>
        </Fade>
        <Fade right duration={2000} delay={500}>
          <div className="hs-text flex">
            <h1>New!</h1>
            <h4>Rosy Fantasy</h4>
            <h5>Meciegast niversta senterta dausya saeitset ertplica.</h5>
            <p>
              Etiam feugiat pellentesque consectetur. Aenean dignissim ornare
              ornare. Curabitur pharetra quis urna vel venenatis. Donec
              elementum neque ac lacus semper condimentum. Duis a augue in enim
              consectetur hendrerit vel sed felis. Quisque accumsan nunc vitae
              sem tempor, sit amet iaculis nibh interdum. Duis at nunc nunc. In
              bibendum at enim in euismod. In mauris massa, ultricies cursus
              facilisis vitae, aliquet id diam. Curabitur eleifend ligula in
              ultricies lobortis. Donec bibendum a elit in blandit. Suspendisse
              quis aliquam velit, in laoreet felis.
            </p>
            <button className="more_btn hs-btn">more</button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default History;
