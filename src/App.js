import { useState } from 'react'
import { Header } from './components/Layout/Header'
import { Meals } from './components/Meals/Meals'
import { Cart } from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const closeCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  )
}

export default App
