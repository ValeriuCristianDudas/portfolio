export interface ProjectData {
  id: string
  tech: string[]
  featured?: boolean
  link?: string
  repo?: string
  tag?: string
}

export const projects: ProjectData[] = [
  {
    id: 'nexora',
    featured: true,
    tech: [
      'TypeScript',
      'NestJS',
      'Angular',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
      'Playwright',
      'WhatsApp Cloud API',
      'IA · Claude',
    ],
  },
  { id: 'inefable', tech: ['WordPress'], link: 'https://esteticainefable.es' },
  {
    id: 'psecurewd',
    tech: ['React Native', 'Expo', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    repo: 'https://github.com/ValeriuCristianDudas/PSecureWD',
  },
]

export const github = 'https://github.com/ValeriuCristianDudas'

export const linkedin = 'https://www.linkedin.com/in/valeriu-cristian-dudas-76839b265/'

export const nexoraStats = [
  { key: 'milestones', value: '57' },
  { key: 'modules', value: '30' },
  { key: 'tests', value: '532' },
  { key: 'audits', value: '14/14' },
]

export const nexoraAreas = [
  { key: 'front', color: 'text-blue' },
  { key: 'back', color: 'text-green' },
  { key: 'integrations', color: 'text-cyan' },
  { key: 'security', color: 'text-purple' },
]

export interface TimelineData {
  id: string
  period: string
}

export const work: TimelineData[] = [
  { id: 'origen', period: '2024 — 2025' },
  { id: 'inetum', period: '2023 — 2024' },
]

export const education: TimelineData[] = [
  { id: 'master', period: '2023 — 2024' },
  { id: 'dam', period: '2021 — 2023' },
  { id: 'smr', period: '2019 — 2021' },
]

export const skillGroups = [
  { id: 'languages', items: ['Java', 'JavaScript / TypeScript', 'Python', 'SQL', 'ABAP', 'C#'] },
  { id: 'frontend', items: ['React', 'React Native', 'Angular', 'HTML / CSS', 'Bootstrap', 'Tailwind CSS'] },
  { id: 'backend', items: ['Node.js', 'Spring Boot', '.NET', 'Prisma', 'MySQL', 'REST APIs'] },
  { id: 'security', items: ['Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'OpenSSL'] },
  { id: 'tools', items: ['Docker', 'Linux', 'Git', 'WordPress', 'Jest', 'Playwright', 'GitHub Actions', 'Postman'] },
]

export const email = 'valeriucristiandudas@gmail.com'
