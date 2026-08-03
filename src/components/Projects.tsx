import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Section from './Section'
import Expandable from './Expandable'
import { projects, nexoraStats, nexoraAreas, email, linkedin } from '../data'

const caseBlocks = [
  { key: 'arch', color: 'text-cyan' },
  { key: 'security', color: 'text-purple' },
  { key: 'quality', color: 'text-green' },
  { key: 'compliance', color: 'text-blue' },
]

export default function Projects() {
  const { t } = useTranslation()
  const [codeModalOpen, setCodeModalOpen] = useState(false)

  useEffect(() => {
    if (!codeModalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCodeModalOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [codeModalOpen])

  return (
    <Section id="projects" index="02" title={t('projects.title')}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            data-reveal
            className={
              project.featured
                ? 'rounded-xl border border-green/40 bg-card p-5 shadow-[0_0_50px_-12px] shadow-green/25 sm:p-8 md:col-span-2'
                : 'rounded-xl border border-border bg-card p-5 transition-colors hover:border-blue/60 sm:p-8'
            }
          >
            {project.tag && (
              <span className="mb-4 inline-block rounded-full border border-border bg-bg px-3 py-1 font-mono text-xs text-muted">
                {project.tag}
              </span>
            )}
            <h3 className={project.featured ? 'text-3xl font-bold' : 'text-2xl font-bold'}>
              {t(`projects.items.${project.id}.name`)}
            </h3>
            <p className="mt-3 max-w-3xl text-muted">
              {t(`projects.items.${project.id}.desc`)}
            </p>

            {project.featured && (
              <>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
                  {nexoraStats.map((stat) => (
                    <div
                      key={stat.key}
                      className="rounded-lg border border-border bg-bg p-3 text-center sm:p-4"
                    >
                      <p className="font-mono text-xl font-bold text-green sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        {t(`projects.items.nexora.stats.${stat.key}`)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                  {nexoraAreas.map((area) => (
                    <Expandable
                      key={area.key}
                      className="rounded-lg border border-border bg-bg p-4 sm:p-5"
                      header={
                        <h4 className={`font-mono text-sm font-semibold ${area.color}`}>
                          {'> '}
                          {t(`projects.items.nexora.areas.${area.key}.title`)}
                        </h4>
                      }
                    >
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t(`projects.items.nexora.areas.${area.key}.desc`)}
                      </p>
                    </Expandable>
                  ))}
                </div>

                <Expandable
                  always
                  className="mt-4 rounded-lg border border-blue/30 bg-bg p-4 sm:mt-6 sm:p-5"
                  header={
                    <h4 className="font-mono text-sm font-semibold text-blue">
                      {'> '}
                      {t('projects.items.nexora.case.toggle')}
                    </h4>
                  }
                >
                  <div className="mt-4 space-y-5">
                    {caseBlocks.map((block) => (
                      <div key={block.key}>
                        <h5 className={`font-mono text-sm font-semibold ${block.color}`}>
                          {t(`projects.items.nexora.case.${block.key}.title`)}
                        </h5>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {t(`projects.items.nexora.case.${block.key}.desc`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </Expandable>
              </>
            )}

            {project.tech.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-xs text-cyan"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:underline"
              >
                {t('projects.visit')} ↗
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:underline"
              >
                {t('projects.viewCode')} ↗
              </a>
            )}
            {project.featured && (
              <button
                onClick={() => setCodeModalOpen(true)}
                className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-blue hover:underline"
              >
                {t('projects.viewCode')} ↗
              </button>
            )}
          </article>
        ))}

        <div
          data-reveal
          className="flex items-center justify-center rounded-xl border border-dashed border-border p-6 font-mono text-sm text-muted md:col-span-2"
        >
          {'// '}
          {t('projects.soon')}
        </div>
      </div>

      {codeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setCodeModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-border bg-card shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted">nexora — bash</span>
              <button
                onClick={() => setCodeModalOpen(false)}
                aria-label={t('projects.nexoraModal.close')}
                className="ml-auto cursor-pointer font-mono text-sm text-muted transition-colors hover:text-fg"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="font-mono text-sm">
                <span className="text-green">$</span> git clone nexora
              </p>
              <p className="mt-1 font-mono text-sm text-[#f85149]">
                ✗ {t('projects.nexoraModal.denied')}
              </p>
              <h4 className="mt-6 text-lg font-bold">
                {t('projects.nexoraModal.title')}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t('projects.nexoraModal.body')}
              </p>
              <div className="mt-6 space-y-2 font-mono text-sm">
                <p>
                  <span className="text-green">$</span>{' '}
                  <span className="text-muted">email:</span>{' '}
                  <a href={`mailto:${email}`} className="text-blue hover:underline">
                    {email}
                  </a>
                </p>
                <p>
                  <span className="text-green">$</span>{' '}
                  <span className="text-muted">linkedin:</span>{' '}
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:underline"
                  >
                    /in/valeriu-cristian-dudas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
