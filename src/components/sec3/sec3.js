import React from "react";
import "./sec3.css";

const Sec3 = () => {
  return (
    <div className="sec3 flex container">
      <h1 className="container" style={{ marginTop: "60px" }}>
        NEWS & EVENTS
      </h1>
      <div className="sec3-tx1 flex container">
        <div className="flex sec3-h1">
          <h1 style={{ fontSize: "45px" }}>21 </h1>
          <h5>MARCH</h5>
        </div>
        <div className="sec3-tx2">
          <h4>KERUYTASE SEREOI UASTRAS DELNYAS</h4>
          <p>
            Adipivitsed quduntut keserla asbordol magnam aiquam quaerats
            voluptdima. Veniam, quis nostru mede. Ercitationem ullam corporis
            suscipit laboriosam, nisis aliquid exeomodi consequatur.
          </p>
          <button className="more_btn sec3-btn">more</button>
        </div>
      </div>

      <div className="sec3-tx1 flex container ">
        <div className="flex sec3-h1">
          <h1 style={{ fontSize: "45px" }}>16</h1>
          <h5>JUNE</h5>
        </div>
        <div className="sec3-tx2">
          <h4>LEYTRAS DELNYAS KERUYTASE SEREOIUAS</h4>
          <p>
            Veniam, quis nostru mede. Adipivitsed quduntut keserla asbordol
            magnam aiquam quaerats voluptdima. Ercitationem ullam corporis
            susces laborios, nisise oddloi conseiquid ex ea commeras.
          </p>
          <button className="more_btn sec3-btn">more</button>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
