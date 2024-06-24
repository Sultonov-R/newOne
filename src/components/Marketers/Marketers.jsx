import React from "react";
import Person from "../Person/Person";
import "./Marketers.css";

function Marketers() {
  return (
    <div className="marketers_wrapper">
      <div className="person_m">
        <Person
          img1="../../person_1.png"
          sentence="“You made it so simple”"
          p_desc="My new site is so much faster and easier to work with than my old site."
          names="Corey Valdez"
          founder="Founder at Zenix"
        />
      </div>
      <div className="person_m">
        <Person
          img1="../../person_2.png"
          sentence="“Simply the best”"
          p_desc="Better than all the rest. I’d recommend this product to beginners."
          names="Ian Klein"
          founder="Digital Marketer"
        />
      </div>
    </div>
  );
}

export default Marketers;
