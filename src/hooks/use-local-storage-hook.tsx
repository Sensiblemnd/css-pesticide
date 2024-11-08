import { useState } from "react"

export const useLocalStorageHook = (key: string, initialValue: boolean) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: boolean) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
