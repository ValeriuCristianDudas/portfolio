import { useTranslation } from 'react-i18next'
import Section from './Section'
import Timeline from './Timeline'
import { education } from '../data'

export default function Education() {
  const { t } = useTranslation()

  return (
    <Section id="education" index="04" title={t('education.title')}>
      <Timeline items={education} accent="purple" i18nBase="education" />
    </Section>
  )
}
