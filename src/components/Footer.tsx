import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Valeriu Cristian Dudas</p>
        <a href="#top" className="transition-colors hover:text-fg">
          {t('footer.top')} ↑
        </a>
      </div>
    </footer>
  )
}
