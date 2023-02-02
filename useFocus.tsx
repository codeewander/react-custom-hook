import React, { Ref, useState, useRef, useEffect, useCallback } from 'react'

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef(null)

  const toggle = useCallback(() => {
    setIsFocused(!isFocused)
  }, [isFocused])

  useEffect(() => {
    const element = ref.current

    element?.addEventListener('focus', toggle)
    element?.addEventListener('blur', toggle)

    return () => {
      element?.removeEventListener('focus', toggle)
      element?.removeEventListener('blur', toggle)
    }
  })

  return [ref, isFocused]
}

// Example of how to use useFocus()
function Example() {
  const [ref, isFocused] = useFocus()
  return (
    <div>
      <input ref={ref} />
      {isFocused && <p>focused</p>}
    </div>
  )
}
