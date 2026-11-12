export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  techStack: string[];
  year: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  category: 'AI & ML' | 'Full Stack' | 'Data Engineering';
  imagePlaceholderGradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface CompetitivePlatform {
  platform: 'LeetCode' | 'CodeChef' | 'Codeforces' | 'AtCoder';
  maxRating: number | string;
  rankBadge: string;
  solvedCount?: string;
  highestRank: string | number;
  highlightMetric: string;
  highlightLabel: string;
  extraDetails: string[];
  profileUrl: string;
  colorScheme: {
    primary: string;
    gradient: string;
    border: string;
    badgeBg: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organizer: string;
  year: string;
  badge: string;
  description: string;
  impactTags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  skillsLearned: string[];
  category: 'Programming' | 'Frontend' | 'Full Stack' | 'Data Analytics';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  status: string;
  location: string;
  coursework: string[];
}
