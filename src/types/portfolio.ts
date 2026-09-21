export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badge?: string;
  subtitle?: string;
  descriptionPoints: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  technologies: string[];
  descriptionPoints: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface AchievementItem {
  platform: string;
  roleOrRank: string;
  rating: number | string;
  ratingLabel: string;
  problemsSolved?: string;
  profileHandle: string;
  profileUrl: string;
  accentColor?: string;
}

export interface AcademicHonor {
  title: string;
  metric: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  details?: string;
}
