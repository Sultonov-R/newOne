import React from "react";
import './Automation.css';

function Automation() {
  return (
    <div className="automation_wrapper">
      <div className="automation_info">
        <h2>Demoni olish orqali o’z markazingizni tizimlashtiring</h2>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page so quickly with Albino.
        </p>
        <div className="demo-class">
          <div className="span-class">
            <span>Demoni olish</span>{" "}
            <span>
              <img width={13} src="../../tail-right.png" alt="right arrow" />
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="automation_image">
        <img src="../../automation.png" alt="picture" />
      </div>
    </div>
  );
}

export default Automation;
