import { React, useState } from "react";
import ModalSeat from "../components/ModalSeat";
import ModalReward from "../components/ModalReward";

const ModalPage = ({ isReward }) => {
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
      {isReward ? (
        <ModalReward isOpen={isOpen} onCancel={handleCancel} />
      ) : (
        <ModalSeat isOpen={isOpen} onCancel={handleCancel} seat={2} />
      )}
    </div>
  );
};

export default ModalPage;