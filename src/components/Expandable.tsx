import { useState, type ReactNode } from 'react'

interface ExpandableProps {
  header: ReactNode
  children: ReactNode
  className?: string
  reveal?: boolean
}

// En móvil el contenido va plegado tras el título; en ≥sm siempre visible.
export default function Expandable({ header, children, className, reveal }: ExpandableProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={className} data-reveal={reveal ? '' : undefined}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-3 text-left sm:pointer-events-none"
      >
        {header}
        <span
          className={`font-mono text-sm text-muted transition-transform sm:hidden ${
            open ? 'rotate-180' : ''
          }`}
        >
          ⌄
        </span>
      </button>
      <div className={`${open ? 'block' : 'hidden'} sm:block`}>{children}</div>
    </div>
  )
}
