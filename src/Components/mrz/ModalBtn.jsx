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
        <div className="modal z-40  ">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>
              Load the passport and postion the mrz scanned with the box
              provided below. position only the machine readable zone of the
              passport
            </h2>
            <Display onClose={closeModal} onSetContent={onSetContent} />
          </div>
        </div>
      )}

      <button
        className=" mx-14 bg-blue-500 px-2 py-1 text-white rounded-md"
        onClick={openModal}
      >
        Automatic Mode
      </button>
    </>
  );
}
