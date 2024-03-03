import { Input } from '../../Utils/Input/Input'
import classes from './MealItemForm.module.css'

export const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  )
}
