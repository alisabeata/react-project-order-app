import React, { useRef, useImperativeHandle } from 'react'
import classes from './Input.module.css'

// forwardRef takes the ref as a second parametr
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef()

  const activate = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return { activateFocus: activate }
  })

  return (
    <div
      className={`${classes.control} ${props.isValid ? '' : classes.invalid}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
})

export default Input
