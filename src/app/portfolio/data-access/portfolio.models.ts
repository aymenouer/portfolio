export type Locale = 'en' | 'de';

export interface Profile {
  fullName: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  resumeFileName: string;
  portraitUrl: string;
  summary: string;
}

export interface NavLink { sectionId: string; label: string; }

export interface Stat { value: string; label: string; }

export interface SkillGroup { name: string; technologies: string[]; }

export interface Project {
  name: string;
  period: string;
  description: string;
  technologies: string[];
  illustration: 'pipeline' | 'network' | 'event';
  colorTheme: 'blue' | 'violet' | 'orange';
  /** Where the project was built, e.g. the university. */
  institution: string;
  liveDemoUrl?: string;
}

export interface Job { role: string; company: string; period: string; location: string; description: string; }

export interface Credential {
  kind: 'education' | 'leadership';
  category: string;
  institution: string;
  detail: string;
  city: string;
  periodAndPlace: string;
}

export interface Language { name: string; proficiency: string; }

/** Text with one highlighted (italic serif) part: `before <em>highlight</em> after`. */
export interface HighlightedText { before: string; highlight: string; after: string; }

/** Section title rendered as `firstLine<br><em>highlightedLine</em>`. */
export interface TwoLineTitle { firstLine: string; highlightedLine: string; }

/** Text for the scene heading, eyebrow and title at the top of a section. */
export interface SectionHeaderText { sceneLabel: string; sceneTagline: string; eyebrow: string; title: TwoLineTitle; }

export interface ProjectCardText { projectLabel: string; illustrationLabel: string; featuredLabel: string; liveDemoLink: string; academicLabel: string; }

/** Every UI string that is not part of the CV data itself. */
export interface UiText {
  nav: {
    brandText: string; availability: string; openMenuLabel: string; closeMenuLabel: string;
    desktopNavLabel: string; mobileNavLabel: string; languageSwitchLabel: string;
  };
  hero: {
    topline: string; portfolioLabel: string; intro: HighlightedText; summary: string;
    exploreWorkButton: string; downloadResumeButton: string;
    figureLabel: string; subjectLabel: string; portraitCaption: [string, string]; locationLabel: string; portraitAltPrefix: string;
    sceneCounter: string; sceneName: string; tagline: HighlightedText; scrollPrompt: string;
  };
  about: SectionHeaderText & { statement: HighlightedText; locationLabel: string; educationLabel: string };
  numbers: { statLabel: string };
  skills: SectionHeaderText & { intro: string };
  projects: SectionHeaderText & { intro: string; card: ProjectCardText };
  manifesto: { sceneLabel: string; statementLines: [string, string]; highlightedWord: string; values: string; closingNote: string };
  experience: SectionHeaderText & { intro: string; certificationsLabel: string; languagesLabel: string };
  contact: {
    sceneLabel: string; sceneTagline: string; eyebrow: string; title: TwoLineTitle & { afterHighlight: string };
    copyEmailButton: string; copiedConfirmation: string; linkedinLink: string; githubLink: string; resumeLink: string;
  };
  footer: { motto: string; note: string; backToTopLink: string };
}

export interface Portfolio {
  profile: Profile;
  navLinks: NavLink[];
  stats: Stat[];
  skillGroups: SkillGroup[];
  projects: Project[];
  jobs: Job[];
  credentials: Credential[];
  certifications: string[];
  languages: Language[];
  text: UiText;
}
