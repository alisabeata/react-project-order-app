import React, { createContext, useReducer } from 'react'

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      items: [...state.items, action.item],
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    }
  }

  if (action.type === 'REMOVE_ITEM') {
  }

  return initialState
}

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState)

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item })
  }

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id })
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
