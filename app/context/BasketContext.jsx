'use client'

import { createContext, useReducer } from 'react'

const initialBasket = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload.product]
    case 'delete':
      return state.filter((item) => item.id !== action.payload.id)
    default:
      throw new Error('No case for that type')
  }
}

export const BasketContext = createContext({
  state: initialBasket,
  dispatch: () => null,
})

export const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialBasket)

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  )
}
