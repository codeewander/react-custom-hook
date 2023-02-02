import React, { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debounceValue
}

// Example of how to use useDebounce()
export function Example() {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500)

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  )
}
