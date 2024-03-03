import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const ModalOverlay = ({ children }) => (
  <div>
    <div className={classes.backdrop} />
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  </div>
)

export const Modal = ({ children }) => {
  const modalWrapper = document.getElementById('modals')
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalWrapper,
      )}
    </>
  )
}
