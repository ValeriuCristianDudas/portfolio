import { useTranslation } from 'react-i18next'
import Section from './Section'
import { email, github, linkedin } from '../data'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" index="05" title={t('contact.title')}>
      <div className="mx-auto max-w-2xl text-center">
        <h3
          data-reveal
          className="bg-gradient-to-r from-blue to-purple bg-clip-text pb-2 text-4xl font-bold text-transparent sm:text-5xl"
        >
          {t('contact.heading')}
        </h3>
        <p data-reveal className="mt-4 text-lg text-muted">
          {t('contact.text')}
        </p>
        <a
          data-reveal
          href={`mailto:${email}`}
          className="mt-8 inline-block font-mono text-lg font-medium text-blue hover:underline sm:text-2xl"
        >
          {email}
        </a>
        <div data-reveal className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-card px-6 py-3 font-medium transition-colors hover:border-blue"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-card px-6 py-3 font-medium transition-colors hover:border-blue"
          >
            LinkedIn
          </a>
        </div>
        <p data-reveal className="mt-10 font-mono text-sm text-muted">
          <span className="text-green">$</span> location: '{t('contact.location')}'
        </p>
      </div>
    </Section>
  )
}
