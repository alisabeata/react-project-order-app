import { useContext } from 'react'
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg'
import classes from './HeaderButton.module.css'
import { CartContext } from '../../context/CartContext'

export const HeaderButton = ({ children, onClick }) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.amount,
    0,
  )

  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      {children}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
