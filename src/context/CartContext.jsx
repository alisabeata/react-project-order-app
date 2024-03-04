import React, { createContext, useReducer } from 'react'

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemId = state.items.findIndex(
      (item) => item.id === action.item.id,
    )

    const existingItem = state.items[existingItemId]

    let updatedItems

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      }

      updatedItems = [...state.items]
      updatedItems[existingItemId] = updatedItem
    } else {
      updatedItems = [...state.items, action.item]
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItemId = state.items.findIndex(
      (item) => item.id === action.id,
    )

    const existingItem = state.items[existingItemId]

    let updatedItems

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1}

      updatedItems = [...state.items]
      updatedItems[existingItemId] = updatedItem
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: state.totalAmount - existingItem.price,
    }
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
