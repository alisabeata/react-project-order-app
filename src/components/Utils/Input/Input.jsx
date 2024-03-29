import React from 'react'
import classes from './Input.module.css'

export const Input = React.forwardRef((props, ref) => (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} id={props.input.id} {...props.input} />
  </div>
))
