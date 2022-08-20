import { React, useState } from "react";
import ReactModal from "react-modal";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <Modal isOpen={isOpen} onCancel={handleCancel} />
    </div>
  );
};

export default ModalPage;
