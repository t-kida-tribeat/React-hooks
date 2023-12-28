import { useEffect, useState } from 'react'

const useLocalStorage = (Key: string, defaultValue: number) => {
  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(Key)
    if (jsonValue !== null) return JSON.parse(jsonValue)
    return defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(Key, JSON.stringify(value))
  }, [value, setValue])

  return [value, setValue]

}

export default useLocalStorage