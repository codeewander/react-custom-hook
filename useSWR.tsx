import React, { useState, useEffect, useMemo } from 'react'

interface Result<T, E> {
  data?: T
  error?: E
}

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>,
): Result<T, E> {
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<E | undefined>(undefined)
  const result = useMemo(fetcher, [_key])

  useEffect(() => {
    const requestFunc = async () => {
      try {
        const data = await Promise.resolve(fetcher())
        setData(data)
      } catch (err) {
        setError(err)
      }
    }

    requestFunc()
  }, [])

  return { data: result instanceof Promise ? data : result, error }
}

// Example of how to use useSWR()

export function Example() {
  const fetcher = () => fetch('api').then((r) => r.json())

  const { data, error } = useSWR('/api', fetcher)
  if (error) return <div>failed</div>
  if (!data) return <div>loading</div>

  return <div>succeeded</div>
}
