import React, { useState } from "react";
import Display from "./Display";

export default function ModalBtn({ onSetContent }) {
  const [opened, setOpened] = useState(false);

  const openModal = () => {
    setOpened(true);
  };

  const closeModal = () => {
    setOpened(false);
  };

  return (
    <>
      {opened && (
        <div className="modal z-40 bg-green-500">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>passport</h2>
            <Display onClose={closeModal} onSetContent={onSetContent} />
          </div>
        </div>
      )}

      <button onClick={openModal}>Automatic Mode</button>
    </>
  );
}
