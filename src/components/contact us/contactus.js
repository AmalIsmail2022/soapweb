import React from "react";
import "./contactus.css";
// import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "./animation/done.json";
import email from "./animation/email.json";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Contactus = () => {
  //   const [state, handleSubmit] = useForm("mdoqkoyy");

  return (
    <section className="contactus contact">
      <div className="container">
        <h1 className="title">CONTACT US</h1>
        <p className="subtitle">Contact with us and send your feedback</p>
        <div className=" formpapa">
          <Fade left duration={2000} delay={500}>
            <form className=" emil-det-tex">
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "24px",
                }}
                className="flex emailpapa"
              >
                <label htmlFor="email">Email Address: </label>
                <input
                  className="emailinput"
                  autoComplete="off"
                  required
                  type="email"
                  name="email"
                  id="email"
                ></input>
                {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}
              </div>
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "24px",
                }}
                className="flex textareapapa"
              >
                <label htmlFor="textarea">Email Content: </label>
                <textarea
                  className="textarea"
                  required
                  name="message"
                  type="textarea"
                  id="textarea"
                ></textarea>
                {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}
              </div>
              <button type="submit" disabled="" className="submit">
                send to mail
              </button>
            </form>
          </Fade>
          <Zoom duration={2000} delay={500}>
            <div className="formanimation">
              <Lottie
                className="contactemail"
                style={{ height: 250 }}
                animationData={email}
              />
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
