import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import Zoom from "react-reveal/Zoom";
const Landing = () => {
  const [show, setShow] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  const showmenu = () => {
    setShow(true);
  };
  const hide1 = () => {
    setShow(false);
  };
  return (
    <div className="content flex" id="up">
      <div className="header">
        <div className="flex container nav">
          <div className="flex logo-container iconpapa">
            <img
              src={logo}
              width="38px"
              height="38px"
              style={{ borderRadius: "50%" }}
              className="iconpapa soapy-img"
            />
            <h4 className="flex soapy">
              <Zoom duration={1000} delay={100}>
                S
              </Zoom>
              <Zoom duration={2000} delay={200}>
                O
              </Zoom>
              <Zoom duration={3000} delay={300}>
                A
              </Zoom>
              <Zoom duration={4000} delay={400}>
                P
              </Zoom>
              <Zoom duration={5000} delay={500}>
                Y
              </Zoom>
            </h4>
          </div>

          <div className="flex nav-container" style={{ gap: "20px" }}>
            <a className="nav-item hh">Home</a>
            <span className="slach hh" style={{ fontSize: "25px" }}>
              /
            </span>
            <a className="nav-item hh"> About Us</a>
            <span className="slach hh" style={{ fontSize: "25px" }}>
              /
            </span>
            <a className="nav-item hh">Products</a>
            <span className="slach hh" style={{ fontSize: "25px" }}>
              /
            </span>
            <a className="nav-item hh">Gallery</a>
            <span className="slach hh" style={{ fontSize: "25px" }}>
              /
            </span>
            <a className="nav-item hh">Contacts</a>
            <button
              onClick={showmenu}
              className="menu iconpapa1 icon-menu flex button"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <button
              onClick={() => {
                localStorage.setItem(
                  "currentmode",
                  theme === "dark" ? "light" : "dark"
                );
                settheme(localStorage.getItem("currentmode"));
              }}
              className="iconpapa light-dark"
            >
              {theme === "dark" ? (
                <span className="icon-moon-fill">
                  <i class="fa-solid fa-moon"></i>
                </span>
              ) : (
                <span className="icon-sun1">
                  <i class="fa-regular fa-sun"></i>
                </span>
              )}
            </button>
          </div>
        </div>

        {show ? (
          <div className="border fixed">
            <ul className="mod">
              <li>
                <a onClick={hide1} className="icon-close-solid menu-close">
                  <>
                    <i class="fa-regular fa-circle-xmark"></i>
                  </>
                </a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <hr style={{ color: "#777", opacity: ".2" }}></hr>
              <li>
                <a href="">About Us</a>
              </li>
              <hr style={{ color: "#777", opacity: ".2" }}></hr>
              <li>
                <a href="">Products</a>
              </li>
              <hr style={{ color: "#777", opacity: ".2" }}></hr>
              <li>
                <a href="">Gallery</a>
              </li>
              <hr style={{ color: "#777", opacity: ".2" }}></hr>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Landing;
