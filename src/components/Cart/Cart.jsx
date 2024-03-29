import { useContext } from 'react'
import { Modal } from '../Utils/Modal/Modal'
import { CartItem } from './CartItem'
import { CartContext } from '../../context/CartContext'
import classes from './Cart.module.css'

export const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext)

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item)}
            {...item}
          >
            {item.name}
          </CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}€</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button__alt']} onClick={onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  )
}
