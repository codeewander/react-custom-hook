import React, { EffectCallback, useEffect, useState } from 'react'

export function useEffectOnce(effect: EffectCallback) {
  return useEffect(() => effect(), [])
}

// Example of how to use useEffectOnce()
export function Example() {
  const [count, setCount] = useState(0)

  useEffectOnce(() => {
    console.log('This effect only runs once!')
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
