import React, { useRef, useEffect } from 'react'

export function useIsFirstRender(): boolean {
  const ref = useRef(true)

  useEffect(() => {
    ref.current = false
  }, [])
  return ref.current
}

// Example of how to use useIsFirstRender()
export function Example() {
  const isFirstRender = useIsFirstRender()
}
