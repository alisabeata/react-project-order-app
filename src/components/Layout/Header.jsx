import { HeaderButton } from './HeaderButton'
import logoIcon from '../../assets/food-icon.svg'
// import { ReactComponent as Logo } from '../../assets/food-icon.svg'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={logoIcon} alt="logo" />
        <h1>Delivery App</h1>
        <HeaderButton>Cart</HeaderButton>
      </header>
      <div></div>
    </>
  )
}
