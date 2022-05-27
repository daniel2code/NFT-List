import React, { useState } from "react";

import addIcon from "../../../../assets/arrow.png";
// import minusIcon from "../../../assets/minus.png";
import { IoMdArrowDropdown } from "react-icons/io";

import "./accordion.css";

const Index = ({ answer, question }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="accordionBox">
        <div className="accordionQuestion">
          <p>{question}</p>
          <div className="iconBox" onClick={() => setOpen((props) => !props)}>
            <img src={addIcon} alt="icon" />
          </div>
        </div>
        {open && (
          <div className="accordionAnswer">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Index;
