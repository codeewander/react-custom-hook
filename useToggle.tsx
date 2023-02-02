import React, { useState } from 'react'

export function useToggle(on: boolean): [boolean, () => void] {
  const [value, setValue] = useState(on)
  const toggle = () => setValue(!value)
  return [value, toggle]
}

// Example of how to use useToggle()
export function Example() {
  const [isToggled, toggle] = useToggle(false)

  return (
    <div>
      <p>Toggled: {isToggled ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}
