import { useContext, useEffect, useState } from 'react'
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg'
import classes from './HeaderButton.module.css'
import { CartContext } from '../../context/CartContext'

export const HeaderButton = ({ children, onClick }) => {
  const [btnIsAnimated, setButtonIsAnimated] = useState(false)
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.amount,
    0,
  )
  const { items } = cartCtx

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ''}`

  useEffect(() => {
    if (items.length !== 0) {
      setButtonIsAnimated(true)
    }

    const timer = setTimeout(() => {
      setButtonIsAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      {children}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
