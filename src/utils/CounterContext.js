'use client'
import { createContext, useContext, useState } from 'react'
import { cakesList } from './constants'

const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    if (localStorage.getItem('cakes')) {
      setCount(
        JSON.parse(localStorage.cakes).reduce((sum, { count }) => {
          return (sum += count)
        }, 0),
      )
    }
  }

  const reset = () => setCount(0)

  return (
    <CounterContext.Provider
      value={{ count, updateCount, reset }}
    >
      {children}
    </CounterContext.Provider>
  )
}

// Custom Hook for Convenience
export const useCounter = () => useContext(CounterContext)
