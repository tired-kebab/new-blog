/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import Create from "../../pages/Create/index";
import Button from "@mui/material/Button";

const Modal = ({ isModal, setIsModal }) => {
  const handleDiscard = () => {
    setIsModal(false);
  };
  return (
    <ReactModal
      isOpen={isModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <Create />
      <Button variant="contained" color="secondary" onClick={handleDiscard}>
        Discard
      </Button>
    </ReactModal>
  );
};

export default Modal;
