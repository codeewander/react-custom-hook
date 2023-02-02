import React, { useRef, useEffect, useState } from 'react'

const usePrevious = (value) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

// Example of how to use usePrevious()
export function Example() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
