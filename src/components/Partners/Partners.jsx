import React from "react";
import "./Partners.css";

function Partners() {
  return (
    <div id="partners" className="partner_wrapper">
      <div className="partners">
        <h2>Hamkorlarimiz</h2>
      </div>
      <div className="partners_info">
        <div className="partners_detailed">
          <img src="../../gr_1.png" alt="first partner" />
          <p>Africtivistes</p>
        </div>
        <div className="partners_detailed">
          <img src="../../gr_2.png" alt="second partner" />
          <p>ecdpm</p>
        </div>
        <div className="partners_detailed">
          <img src="../../gr_3.png" alt="third partner" />
          <p>Goree Institute</p>
        </div>
        <div className="partners_detailed">
          <p>Code for Africa</p>
        </div>
        <div className="partners_detailed">
          <p>DWF</p>
        </div>
        <div className="partners_detailed">
          <img src="../../gr_4.png" alt="fourth partner" />
          <p>EPD</p>
        </div>
      </div>
    </div>
  );
}

export default Partners;
