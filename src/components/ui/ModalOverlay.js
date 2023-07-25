import "./ModalOverlay.scss";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
