import React, { useRef, useEffect, useState } from 'react'

const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const timeoutId = setTimeout(() => callbackRef.current(), delay)
    return () => clearTimeout(timeoutId)
  }, [delay])
}

// Example of how to use useTimeout()
export function Example() {
  const [count, setCount] = useState(0)

  useTimeout(() => {
    setCount(count + 1)
  }, 1000)

  return <div>Count: {count}</div>
}
