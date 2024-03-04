import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const ModalOverlay = ({ children, onClose }) => (
  <div>
    <div className={classes.backdrop} onClick={onClose} />
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  </div>
)

export const Modal = ({ children, onClose }) => {
  const modalWrapper = document.getElementById('modals')
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        modalWrapper,
      )}
    </>
  )
}
