import React, { useState } from "react";
import "./Modal.css";

const toggleModal = () => {
  setModal(!modal);
};

export default function Modal() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <div className="overlay">
          <p> Ringing the monkey... </p>
        </div>
      </div>
    </>
  );
}
