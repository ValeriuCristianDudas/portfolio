import { useTranslation } from 'react-i18next'
import type { TimelineData } from '../data'

interface TimelineProps {
  items: TimelineData[]
  accent: 'blue' | 'purple'
  i18nBase: string
  showDesc?: boolean
}

export default function Timeline({ items, accent, i18nBase, showDesc }: TimelineProps) {
  const { t } = useTranslation()
  const dotColor = accent === 'blue' ? 'bg-blue' : 'bg-purple'
  const orgColor = accent === 'blue' ? 'text-blue' : 'text-purple'

  return (
    <ol className="max-w-3xl space-y-10 border-l border-border pl-6">
      {items.map((item) => (
        <li key={item.id} data-reveal className="relative">
          <span
            className={`absolute top-1 -left-[30px] size-3 rounded-full border-2 border-bg ${dotColor}`}
          />
          <p className="font-mono text-xs text-muted">{item.period}</p>
          <h3 className="mt-1.5 text-lg font-semibold">
            {t(`${i18nBase}.items.${item.id}.role`)}
          </h3>
          <p className={`text-sm ${orgColor}`}>{t(`${i18nBase}.items.${item.id}.org`)}</p>
          {showDesc && (
            <p className="mt-2 max-w-xl text-sm text-muted">
              {t(`${i18nBase}.items.${item.id}.desc`)}
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}
