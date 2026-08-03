import { useTranslation } from 'react-i18next'
import Section from './Section'
import Expandable from './Expandable'
import { skillGroups } from '../data'
import photo from '../assets/valeriu.webp'

export default function About() {
  const { t } = useTranslation()

  const languages = [
    { key: 'es', level: 'native' },
    { key: 'ro', level: 'native' },
    { key: 'en', level: 'intermediate' },
  ]

  const highlights = [
    { key: 'e2e', color: 'text-blue' },
    { key: 'security', color: 'text-purple' },
    { key: 'drive', color: 'text-green' },
  ]

  const groupStyles: Record<string, { title: string; chip: string }> = {
    languages: { title: 'text-blue', chip: 'border-blue/30' },
    frontend: { title: 'text-cyan', chip: 'border-cyan/30' },
    backend: { title: 'text-green', chip: 'border-green/30' },
    security: { title: 'text-[#f85149]', chip: 'border-[#f85149]/30' },
    tools: { title: 'text-purple', chip: 'border-purple/30' },
  }

  return (
    <Section id="about" index="01" title={t('about.title')}>
      <div className="mb-8 grid gap-3 sm:mb-12 sm:gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Expandable
            key={item.key}
            reveal
            className="rounded-xl border border-border bg-card p-4 sm:p-6"
            header={
              <h3 className={`font-mono text-sm font-semibold ${item.color}`}>
                {'> '}
                {t(`about.highlights.${item.key}.title`)}
              </h3>
            }
          >
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(`about.highlights.${item.key}.desc`)}
            </p>
          </Expandable>
        ))}
      </div>

      {/* En lg la caja de skills flota a la derecha para que el texto fluya por debajo */}
      <div className="flex flex-col lg:block">
        <div
          data-reveal
          className="order-2 mt-10 lg:order-none lg:float-right lg:mt-2 lg:mb-8 lg:ml-14 lg:w-[55%]"
        >
          <h3 className="mb-6 font-mono text-sm tracking-widest text-muted uppercase">
            {t('about.skillsTitle')}
          </h3>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <p className={`mb-2 font-mono text-xs ${groupStyles[group.id].title}`}>
                  {t(`about.groups.${group.id}`)}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-md border bg-card px-3 py-1.5 font-mono text-xs ${groupStyles[group.id].chip}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="order-1 lg:order-none">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-blue via-cyan to-purple p-[3px]">
              <div className="size-48 overflow-hidden rounded-full border-4 border-bg sm:size-56">
                <img
                  src={photo}
                  alt="Cristian Dudas"
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="leading-relaxed text-muted">{t('about.p1')}</p>
          <p className="mt-4 leading-relaxed text-muted">{t('about.p2')}</p>
          <p className="mt-4 leading-relaxed text-muted">{t('about.p3')}</p>

          <h3 className="mt-10 mb-4 font-mono text-sm tracking-widest text-muted uppercase">
            {t('about.languagesTitle')}
          </h3>
          <ul className="space-y-2 text-sm">
            {languages.map((lang) => (
              <li
                key={lang.key}
                className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-2"
              >
                <span>{t(`about.languages.${lang.key}`)}</span>
                <span
                  className={`font-mono text-xs ${
                    lang.level === 'native' ? 'text-green' : 'text-cyan'
                  }`}
                >
                  {t(`about.levels.${lang.level}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="clear-both" />
      </div>
    </Section>
  )
}
