import React, { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value)

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
  const [inputValue, setInputValue] = useState<String>('')
  const debouncedValue = useDebounce(inputValue, 500)

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  )
}
