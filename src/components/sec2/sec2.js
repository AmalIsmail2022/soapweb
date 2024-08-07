import React from "react";
import "./sec2.css";
import Fade from "react-reveal/Fade";

const Sec2 = () => {
  return (
    <div className="sec2">
      <div className="flex container">
        <Fade left duration={2000} delay={500}>
      
          <div className="flex container sec2-text">
            <h1>NATURAL </h1>
            <h1>HANDMADE SOAP</h1>

            <p>
              Etiam feugiat pellentesque consectetur. Aenean dignissim ornare
              ornare. Curabitur pharetra quis urna vel venenatis. Donec
              elementum neque ac lacus semper condimentum. Duis a augue in enim
              consectetur hendrerit vel sed felis.
              <br />
              <br />
              Quisque accumsan nunc vitae sem tempor, sit amet iaculis nibh
              interdum. Duis at nunc nunc. In bibendum at enim in euismod. In
              mauris massa, ultricies cursus facilisis vitae, aliquet id diam.
            </p>
          </div>
        </Fade>
        <div className="sec2-null"></div>
      </div>
    </div>
  );
};

export default Sec2;
