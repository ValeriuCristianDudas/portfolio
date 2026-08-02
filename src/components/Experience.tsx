import { useTranslation } from 'react-i18next'
import Section from './Section'
import Timeline from './Timeline'
import { work } from '../data'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <Section id="experience" index="03" title={t('experience.title')}>
      <Timeline items={work} accent="blue" i18nBase="experience" showDesc />
    </Section>
  )
}
