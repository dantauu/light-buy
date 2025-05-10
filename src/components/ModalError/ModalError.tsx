import "./ModalError.scss"

interface ModalProps {
  message: string
  onClose: () => void
}

const ModalError = ({ message, onClose }: ModalProps) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-error" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content-wrapper">
          <p className="modal-content__inner">{message}</p>
          <button onClick={handleClose} className="modal-close-button">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalError
