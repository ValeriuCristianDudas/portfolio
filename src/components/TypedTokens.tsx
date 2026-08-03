import { useEffect, useState } from 'react'

export interface Token {
  text: string
  className?: string
}

interface TypedTokensProps {
  tokens: Token[]
  cps?: number
  delay?: number
  cursorClassName?: string
  keepCursor?: boolean
}

// Escribe los tokens carácter a carácter conservando el color de cada uno.
// El progreso se calcula por tiempo transcurrido, así la animación termina
// a su hora aunque el navegador acelere o frene los timers.
export default function TypedTokens({
  tokens,
  cps = 40,
  delay = 0,
  cursorClassName = '',
  keepCursor = false,
}: TypedTokensProps) {
  const total = tokens.reduce((sum, token) => sum + token.text.length, 0)
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [count, setCount] = useState(prefersReduced ? total : 0)

  useEffect(() => {
    if (prefersReduced) return
    let interval: ReturnType<typeof setInterval> | undefined
    const timeout = setTimeout(() => {
      const start = Date.now()
      interval = setInterval(() => {
        const typed = Math.min(total, Math.floor(((Date.now() - start) / 1000) * cps))
        setCount(typed)
        if (typed >= total && interval) clearInterval(interval)
      }, 1000 / cps)
    }, delay)
    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [total, cps, delay])

  const done = count >= total
  let remaining = count

  return (
    <>
      {tokens.map((token, i) => {
        const visible = token.text.slice(0, Math.max(0, remaining))
        remaining -= token.text.length
        return (
          <span key={i} className={token.className}>
            {visible}
          </span>
        )
      })}
      {(!done || keepCursor) && (
        <span aria-hidden="true" className={`animate-pulse ${cursorClassName}`}>
          ▍
        </span>
      )}
    </>
  )
}
