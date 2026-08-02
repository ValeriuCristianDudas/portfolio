import { useTranslation } from 'react-i18next'

const LANGS = ['es', 'en'] as const

export default function Header() {
  const { t, i18n } = useTranslation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm">
          <span className="text-green">~</span>
          <span className="text-muted">/</span>cristian
          <span className="animate-pulse text-blue">_</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm whitespace-nowrap text-muted md:flex lg:gap-8">
          <a href="#about" className="transition-colors hover:text-fg">
            {t('nav.about')}
          </a>
          <a href="#projects" className="transition-colors hover:text-fg">
            {t('nav.projects')}
          </a>
          <a href="#experience" className="transition-colors hover:text-fg">
            {t('nav.experience')}
          </a>
          <a href="#education" className="transition-colors hover:text-fg">
            {t('nav.education')}
          </a>
          <a href="#contact" className="transition-colors hover:text-fg">
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-1 rounded-md border border-border bg-card p-1 font-mono text-xs">
          {LANGS.map((lang) => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={`rounded px-2 py-1 transition-colors ${
                i18n.resolvedLanguage === lang
                  ? 'bg-blue/15 text-blue'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
