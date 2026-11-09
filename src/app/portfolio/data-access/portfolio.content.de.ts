import { Portfolio } from './portfolio.models';
import { PORTFOLIO_EN } from './portfolio.content.en';

/**
 * German translation of PORTFOLIO_EN — draft, to be proofread by a native speaker.
 * Contact details, links and technology names are shared with the English version.
 */
export const PORTFOLIO_DE: Portfolio = {
  profile: {
    ...PORTFOLIO_EN.profile,
    role: 'Software Engineer',
    location: 'Hamburg, Deutschland',
    summary: 'Software Engineer mit über 3 Jahren Berufserfahrung in der Entwicklung von Webanwendungen, spezialisiert auf Angular und TypeScript. Erfahrung mit Nx-Monorepos, NgRx SignalStore, Frontend-Architektur, GraphQL und Designsystemen. Zuvor Full-Stack-Entwicklung mit Node.js/Express sowie Studienprojekte mit Java/Spring Boot; aktuell baue ich meine Backend-Kenntnisse gezielt aus, um mich zum End-to-End-Software-Engineer weiterzuentwickeln.',
  },
  navLinks: [
    { sectionId: 'about', label: 'Über mich' },
    { sectionId: 'skills', label: 'Kenntnisse' },
    { sectionId: 'projects', label: 'Projekte' },
    { sectionId: 'experience', label: 'Erfahrung' },
    { sectionId: 'contact', label: 'Kontakt' },
  ],
  stats: [
    { value: '3+', label: 'Jahre Berufserfahrung' },
    { value: '2023', label: 'Einstieg bei Immomio als Frontend Engineer' },
    { value: '3', label: 'Ausgewählte Studienprojekte' },
    { value: '1.', label: 'Platz beim ESPRIT-Projektwettbewerb 2021' },
  ],
  skillGroups: [
    { name: 'Frontend', technologies: PORTFOLIO_EN.skillGroups[0].technologies },
    { name: 'Backend & APIs', technologies: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Java', 'Spring Boot (Studienprojekte)'] },
    { name: 'Testing & Tooling', technologies: PORTFOLIO_EN.skillGroups[2].technologies },
    { name: 'Datenbanken', technologies: PORTFOLIO_EN.skillGroups[3].technologies },
  ],
  projects: [
    {
      ...PORTFOLIO_EN.projects[0],
      name: 'Spring-Boot-Anwendung — CI/CD & DevOps', period: 'Sep. – Dez. 2021',
      description: 'Aufbau einer Jenkins-basierten CI/CD-Pipeline für eine Spring-Boot-Anwendung – inklusive Builds, Unit-Tests, Code-Qualitätsprüfungen und Artefaktverwaltung.',
    },
    {
      ...PORTFOLIO_EN.projects[1],
      name: '3aweni — Soziale Networking-Plattform', period: 'Feb. – Jun. 2021',
      description: 'Entwicklung einer kollaborativen Networking-Plattform für Diskussionen, Wissensaustausch und karrierebezogene Communities; mit öffentlich erreichbarer Demo.',
    },
    {
      ...PORTFOLIO_EN.projects[2],
      name: 'Eventmanagement — Full-Stack-Anwendung', period: 'Nov. – Dez. 2020',
      description: 'Entwicklung von Funktionen zum Entdecken und Verwalten von Events – mit Angular-Frontend, Spring-Boot-Backend und MongoDB als Datenspeicher.',
    },
  ],
  jobs: [
    { role: 'Frontend Engineer', company: 'Immomio GmbH', period: 'Aug. 2023 – heute', location: 'Hamburg, Deutschland',
      description: 'Entwicklung und Wartung von Angular- und TypeScript-Anwendungen in einem Nx-Monorepo, mit RxJS und NgRx SignalStore für komplexe Frontend-Workflows.' },
    { role: 'Software Engineer (Praktikum)', company: 'AdDefend GmbH', period: 'Aug. 2022 – Jul. 2023', location: 'Hamburg, Deutschland',
      description: 'Entwicklung JavaScript-basierter Lösungen zur Integration von Werbetechnologie in Publisher-Websites – über unterschiedliche Seitenlayouts und Browserumgebungen hinweg.' },
    { role: 'Full-Stack-Entwickler (Praktikum)', company: 'Innovant Studio', period: 'Jun. 2021 – Aug. 2021', location: 'Tunesien',
      description: 'Entwicklung einer Anwendung zur Bildschirmverwaltung und Inhaltsanzeige mit Admin-Dashboard und Electron-basiertem Screen-Player.' },
    { role: 'Full-Stack-Entwickler (Praktikum)', company: 'XPR', period: 'Jul. 2020 – Sep. 2020', location: 'Tunesien',
      description: 'Entwicklung von Angular-Features für eine Buchhaltungs- und Unternehmenssoftware, u. a. Benutzerverwaltung, Suche, Paginierung und steuerbezogene Workflows.' },
    { role: 'Praktikum Webentwicklung', company: 'IB-SOFT', period: 'Jul. 2019 – Aug. 2019', location: 'Tunesien',
      description: 'Entwicklung von Web-Funktionen für Benutzerverwaltung und administrative Abläufe mit HTML, CSS, JavaScript und Datenbankanbindung.' },
  ],
  credentials: [
    { kind: 'education', category: 'AUSBILDUNG', institution: 'ESPRIT', detail: 'Computer Engineering (5-jähriger Studiengang)', city: 'Tunis', periodAndPlace: '2017 – 2023 · Tunis, Tunesien' },
    { kind: 'leadership', category: 'FÜHRUNG', institution: 'AIESEC', detail: 'Local Committee President', city: 'Hamburg', periodAndPlace: 'Jan. 2024 – Jan. 2025 · AIESEC in Hamburg' },
  ],
  certifications: PORTFOLIO_EN.certifications,
  languages: [
    { name: 'Arabisch', proficiency: 'Muttersprache' },
    { name: 'Englisch', proficiency: 'Fortgeschritten' },
    { name: 'Französisch', proficiency: 'Fortgeschritten' },
    { name: 'Deutsch', proficiency: 'Grundkenntnisse (A1)' },
  ],
  text: {
    nav: {
      brandText: 'AYMEN / ENGINEER', availability: 'OFFEN FÜR KONTAKT', openMenuLabel: 'MENÜ +', closeMenuLabel: 'SCHLIESSEN −',
      desktopNavLabel: 'Hauptnavigation', mobileNavLabel: 'Mobile Navigation', languageSwitchLabel: 'Sprache',
    },
    hero: {
      topline: 'UNABHÄNGIG DENKEN / GEMEINSAM BAUEN',
      portfolioLabel: 'PORTFOLIO',
      intro: { before: 'Ich entwickle', highlight: 'durchdachte', after: 'digitale Erlebnisse – von der Frontend-Architektur bis zur Full-Stack-Anwendung.' },
      summary: 'Spezialisiert auf Angular & TypeScript – mit Erfahrung in UI-Systemen, Softwarearchitektur und APIs.',
      exploreWorkButton: 'MEINE ARBEITEN',
      downloadResumeButton: 'LEBENSLAUF',
      figureLabel: 'ABB. 001',
      subjectLabel: 'MOTIV / A.O.',
      portraitCaption: ['THE HUMAN', 'IN THE LOOP'],
      locationLabel: 'HAMBURG / DEUTSCHLAND',
      portraitAltPrefix: 'Porträt von',
      sceneCounter: '01 / 07',
      sceneName: 'URSPRUNG',
      tagline: { before: 'DESIGN', highlight: 'trifft', after: 'ENGINEERING' },
      scrollPrompt: 'WEITER SCROLLEN',
    },
    about: {
      sceneLabel: 'SZENE 02 / ÜBER MICH', sceneTagline: 'ETWAS KONTEXT', eyebrow: '/ EINFÜHRUNG',
      title: { firstLine: 'Mehr als', highlightedLine: 'nur Code.' },
      statement: {
        before: 'Als Software Engineer entwickle ich',
        highlight: 'klare, zuverlässige',
        after: 'digitale Produkte – und verbinde die Details von Frontend-Oberflächen mit dem großen Ganzen von Softwaresystemen.',
      },
      locationLabel: 'STANDORT', educationLabel: 'AUSBILDUNG',
    },
    numbers: { statLabel: '/ ZAHLEN' },
    skills: {
      sceneLabel: 'SZENE 03 / KENNTNISSE', sceneTagline: 'WERKZEUGKASTEN', eyebrow: '/ KOMPETENZEN',
      title: { firstLine: 'Angetrieben von', highlightedLine: 'Neugier.' },
      intro: 'Von performanten Angular-Oberflächen bis zu Backend-APIs, Tests und Continuous Delivery.',
    },
    projects: {
      sceneLabel: 'SZENE 04 / AUSGEWÄHLTE ARBEITEN', sceneTagline: 'STUDIENPROJEKTE', eyebrow: '/ ARBEIT, DIE ZÄHLT',
      title: { firstLine: 'Ideen, die', highlightedLine: 'greifbar werden.' },
      intro: 'Drei ausgewählte Studienprojekte aus meinem Lebenslauf – jedes beleuchtet einen anderen Bereich der Softwareentwicklung.',
      card: { projectLabel: 'PROJEKT /', illustrationLabel: 'ILLUSTRATION', featuredLabel: '/ AUSGEWÄHLTE ARBEIT', liveDemoLink: 'LIVE-DEMO ANSEHEN', academicLabel: 'STUDIENPROJEKT /' },
    },
    manifesto: {
      sceneLabel: 'SZENE 05 / HALTUNG', statementLines: ['GUTE SOFTWARE', 'ENTSTEHT MIT'], highlightedWord: 'ABSICHT.',
      values: 'DESIGN × ARCHITEKTUR × HANDWERK', closingNote: 'DIE ARBEIT GEHT WEITER',
    },
    experience: {
      sceneLabel: 'SZENE 06 / ERFAHRUNG', sceneTagline: 'DER BISHERIGE WEG', eyebrow: '/ WERDEGANG',
      title: { firstLine: 'Stationen', highlightedLine: 'meiner Arbeit.' },
      intro: 'Professionelle Softwareentwicklung, akademische Grundlagen und ehrenamtliche Führung.',
      certificationsLabel: '/ ZERTIFIKATE', languagesLabel: '/ SPRACHEN',
    },
    contact: {
      sceneLabel: 'SZENE 07 / KONTAKT', sceneTagline: 'WIE GEHT ES WEITER?', eyebrow: 'OFFEN FÜR GESPRÄCHE',
      title: { firstLine: 'MACHEN WIR', highlightedLine: 'etwas', afterHighlight: 'ECHTES.' },
      copyEmailButton: 'E-MAIL KOPIEREN', copiedConfirmation: 'KOPIERT ✓', linkedinLink: 'LINKEDIN', githubLink: 'GITHUB', resumeLink: 'LEBENSLAUF',
    },
    footer: { motto: 'MIT ABSICHT ENTWICKELT.', note: 'Mit Angular gebaut – von Hand.', backToTopLink: 'NACH OBEN' },
  },
};
