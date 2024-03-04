import { useContext } from 'react'
import { MealItemForm } from './MealItemForm'
import { CartContext } from '../../../context/CartContext'
import classes from './MealItem.module.css'

export const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price.toFixed(2) + '€'}</span>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  )
}
