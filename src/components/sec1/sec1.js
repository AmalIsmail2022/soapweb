import React, { useState } from "react";
import "./sec1.css";
import img1 from "../../images/36.jpeg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/4.jpg";
import img4 from "../../images/3.jpg";
import Zoom from "react-reveal/Zoom";

const Sec1 = () => {
  const [state, setstate] = useState(false);
  const [state2, setstate2] = useState(false);
  const [state3, setstate3] = useState(false);
  const [state4, setstate4] = useState(false);
  
  const show1 = () => {
    setstate(true);
  };
  const hide1 = () => {
    setstate(false);
  };
  const show2 = () => {
    setstate2(true);
  };
  const hide2 = () => {
    setstate2(false);
  };
  const show3 = () => {
    setstate3(true);
  };
  const hide3 = () => {
    setstate3(false);
  };
  const show4 = () => {
    setstate4(true);
  };
  const hide4 = () => {
    setstate4(false);
  };
  return (
    <div className="flex container card-container">
      <div className="flex card">
        <Zoom duration={1000} delay={100}>
          <div className="image" onClick={show1}>
            <img src={img1} alt="" />
          </div>
        </Zoom>
        <h2>OUR HISTORY</h2>
        <h4>Vaetyasa Hytoiase Siugsas</h4>
        <p>
          Trasades kasertas leryan feriuyas liasrer asety kertya aselicb
          serafaes kerersvitae fasea des. Melasec vaatiptes keruytas aiades
          goertayse.
        </p>
        <button className="more_btn sec-btn">more</button>
        {state ? (
          <div className="fixed" onClick={hide1}>
            <img src={img1} className="pro-img" alt="" />
            <a onClick={hide1} className="icon-close-solid ">
              <div>
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </a>
          </div>
        ) : null}
      </div>

      <div className="flex card">
        <Zoom duration={2500} delay={250}>
          <div className="image bf2" onClick={show2}>
            <img src={img2} alt="" />
          </div>
        </Zoom>
        <h2>FEATURED PRODUCTS</h2>
        <h4>Nelore Liugisa Etyasets</h4>
        <p>
          Masertas leryantrasades asety kertya Selicb serafaes kertyu ersvitae
          fasea des. Veserat niptes klase iades goertayse vole rnatur aut
          oditaut.
        </p>
        <button className="more_btn bg2 sec-btn">more</button>
        {state2 ? (
          <div className="fixed" onClick={hide2}>
            <img src={img2} alt="" className="pro-img" />
            <a onClick={hide2} className="icon-close-solid ">
              <div>
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </a>
          </div>
        ) : null}
      </div>
      <div className="flex card">
        <Zoom duration={4000} delay={400}>
          <div className="image bf3" onClick={show3}>
            <img src={img3} alt="" />
          </div>
        </Zoom>
        <h2>CURING PROCESS</h2>
        <h4>Detyuas Hytoiase Vaetyasa</h4>
        <p>
          Dolore sertas lerya mioiras sety kertya aselicb serafaes ertyu
          ersvitae fasea desa Kiptes lasec serates riades goertayse volernatu
          tonsequse untus.
        </p>
        <button className="more_btn bg3 sec-btn">more</button>
        {state3 ? (
          <div className="fixed" onClick={hide3}>
            <img src={img3} className="pro-img" alt="" />
            <a onClick={hide3} className="icon-close-solid ">
              <div>
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </a>
          </div>
        ) : null}
      </div>

      <div className="flex card">
        <Zoom duration={5500} delay={550}>
          <div className="image bf4" onClick={show4}>
            <img src={img4} alt="" />
          </div>
        </Zoom>
        <h2>ECO SOAP</h2>
        <h4>Uyrasa Hiesas Fertiaserd</h4>

        <p>
          Kertase viera miasertas lertyaser feroas asety kertya aselicb serafaes
          kertyu eraes fasea des. Slasec vaserat niptes iadesa loertayse deloas.
        </p>
        <button className="more_btn bg4 sec-btn">more</button>
        {state4 ? (
          <div className="fixed" onClick={hide4}>
            <img src={img4} className="pro-img" alt="" />
            <a onClick={hide4} className="icon-close-solid ">
              <div>
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sec1;
