import classes from './Card.module.css'

export const Card = ({ children }) => (
  <div className={classes.card}>{children}</div>
)
