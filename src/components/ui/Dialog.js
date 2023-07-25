import React from "react";
import Button from "../../ui/Button";
import Modal from "./ModalOverlay";
import "./Dialog.scss";

function Dialog({ title, setOpenModal, deleteProduct }) {
  return (
    <Modal>
      <div className="dialog">
        <div className="dialog__title">{title}</div>
        <div className="dialog__buttons">
          <Button onClick={deleteProduct} type="small">
            YES
          </Button>
          <Button onClick={() => setOpenModal(false)} type="small">
            NO
          </Button>
        </div>
        <span onClick={() => setOpenModal(false)} className="dialog__closeBtn">
          X
        </span>
      </div>
    </Modal>
  );
}

export default Dialog;
