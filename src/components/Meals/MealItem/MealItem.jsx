import { MealItemForm } from './MealItemForm'
import classes from './MealItem.module.css'

export const MealItem = ({ name, description, price }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price.toFixed(2) + '€'}</span>
      </div>
      <MealItemForm />
    </li>
  )
}
