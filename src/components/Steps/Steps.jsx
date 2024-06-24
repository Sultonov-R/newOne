import React from "react";
import './Steps.css';

function Steps() {
  return (
    <div className="steps-wrapper">
      <div className="steps-title">
        <h2>Siz uchun 3 ta qadam</h2>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="steps-desc">
        <div>
          <img width={440} src="../../sketching.png" alt="sketching" />
        </div>
        <div className="detailed-steps">
          <div className="detailed_info">
            <div className="number"><span>1</span></div>
            <div className="steps_in">
              <h3>Demoni oling</h3>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
          <div className="detailed_info">
            <div className="number"><span>2</span></div>
            <div className="steps_in">
              <h3>O’zingiz uchun sinab ko’ring</h3>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
          <div className="detailed_info">
            <div className="number"><span>3</span></div>
            <div className="steps_in">
              <h3>Avtomatlashtirishni boshlang</h3>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
