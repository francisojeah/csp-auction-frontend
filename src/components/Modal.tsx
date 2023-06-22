function Modal({ open, modalLable, children, custom_modal, onClose }: any) {
  const handleClose = (e: any) => {
    if (e.target.className === "modalContainer") {
      onClose();
    }
    return null;
  };

  if (open) {
    return (
      <div
        className="modalContainer fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-auto"
        onClick={handleClose}
      >
        <div className={`modal ${custom_modal} bg-white p-1`}>
          <div className="modal__head">
            <h2>{modalLable}</h2>
            <span className="modal__close" onClick={onClose}>
              x
            </span>
          </div>
          {children}
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
