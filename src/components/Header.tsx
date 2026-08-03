import { useTranslation } from 'react-i18next'
import { email, github, linkedin } from '../data'

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

        <div className="flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-fg"
          >
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-fg"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-fg"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </a>
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
      </div>
    </header>
  )
}
