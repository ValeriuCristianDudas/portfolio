import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TypedTokens, { type Token } from './TypedTokens'

gsap.registerPlugin(useGSAP)

const gradientName = 'bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent'

const nameTokens: Token[] = [
  { text: 'Valeriu ' },
  { text: '{', className: 'font-mono font-semibold text-green' },
  { text: ' Cristian ', className: gradientName },
  { text: '}', className: 'font-mono font-semibold text-green' },
  { text: ' Dudas' },
]

const codeTokens: Token[] = [
  { text: 'const', className: 'text-purple' },
  { text: ' ' },
  { text: 'dev', className: 'text-cyan' },
  { text: ' = {\n  name: ' },
  { text: "'Valeriu ", className: 'text-green' },
  { text: 'Cristian', className: `font-semibold ${gradientName}` },
  { text: " Dudas'", className: 'text-green' },
  { text: ',\n  stack: [' },
  { text: "'React'", className: 'text-green' },
  { text: ', ' },
  { text: "'Angular'", className: 'text-green' },
  { text: ', ' },
  { text: "'Node.js'", className: 'text-green' },
  { text: ',\n          ' },
  { text: "'.NET'", className: 'text-green' },
  { text: ', ' },
  { text: "'Java'", className: 'text-green' },
  { text: ', ' },
  { text: "'Python'", className: 'text-green' },
  { text: '],\n  openToWork: ' },
  { text: 'true', className: 'text-blue' },
  { text: ',\n  coffee: ' },
  { text: 'Infinity', className: 'text-blue' },
  { text: ',\n};' },
]

const codePlain = codeTokens.map((token) => token.text).join('')

export default function Hero() {
  const { t } = useTranslation()
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-animate]', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
      })
    },
    { scope },
  )

  return (
    <section
      id="top"
      ref={scope}
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-16 lg:grid-cols-2"
    >
      <div>
        <p data-animate className="mb-4 font-mono text-green">
          $ {t('hero.greeting')}
        </p>
        <h1 data-animate className="relative text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="invisible">
            Valeriu <span className="font-mono font-semibold">{'{'}</span> Cristian{' '}
            <span className="font-mono font-semibold">{'}'}</span> Dudas
          </span>
          <span className="absolute inset-0">
            <TypedTokens tokens={nameTokens} cps={22} delay={400} cursorClassName="text-blue" />
          </span>
        </h1>
        <h2
          data-animate
          className="mt-3 bg-gradient-to-r from-blue to-cyan bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
        >
          {t('hero.role')}
        </h2>
        <p data-animate className="mt-6 max-w-md text-lg text-muted">
          {t('hero.tagline')}
        </p>
        <div data-animate className="mt-8 flex flex-wrap gap-3">
          <a
            href="#about"
            className="rounded-[3px] bg-[#0078d4] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#026ec1]"
          >
            {t('nav.about')}
          </a>
          <a
            href="#contact"
            className="rounded-[3px] border border-white/10 bg-[#313131] px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-[#3c3c3c]"
          >
            {t('hero.ctaContact')}
          </a>
        </div>
      </div>

      <div data-animate className="hidden lg:block">
        <div className="rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-muted">dev.ts</span>
          </div>
          <pre className="relative overflow-x-auto p-6 font-mono text-sm leading-7">
            <code className="invisible">{codePlain}</code>
            <code className="absolute inset-0 p-6">
              <TypedTokens
                tokens={codeTokens}
                cps={45}
                delay={1900}
                keepCursor
                cursorClassName="text-fg"
              />
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
