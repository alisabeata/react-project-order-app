import { Modal } from '../Utils/Modal/Modal'
import classes from './Cart.module.css'
import { MEALS_MOCK } from '../Meals/MealsAvailable'

export const Cart = () => {
  const cartItems = [{ ...MEALS_MOCK[0] }]

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>100.00€</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button__alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}
