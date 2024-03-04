import { useRef, useState } from 'react'
import { Input } from '../../Utils/Input/Input'
import classes from './MealItemForm.module.css'

export const MealItemForm = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNum = Number(enteredAmount)

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 0 ||
      enteredAmountNum > 10
    ) {
      setAmountIsValid(false)
      return
    }

    onAddToCart(enteredAmountNum)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!amountIsValid && <p>Please, enter a valid amount (1-10)</p>}
    </form>
  )
}
