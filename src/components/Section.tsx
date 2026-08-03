import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, title, children }: SectionProps) {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('[data-reveal]', {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 75%',
          once: true,
        },
      })
    },
    { scope },
  )

  return (
    <section id={id} ref={scope} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16 sm:px-6 sm:py-24">
      <h2 data-reveal className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl">
        <span className="mr-3 font-mono text-xl text-green sm:text-2xl">{index}.</span>
        {title}
      </h2>
      {children}
    </section>
  )
}
