import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg'
import classes from './HeaderButton.module.css'

export const HeaderButton = ({ children }) => {
  return (
    <button className={classes.button}>
      <span >
        <CartIcon className={classes.icon} />
      </span>
      {children}
      <span className={classes.badge}>0</span>
    </button>
  )
}
