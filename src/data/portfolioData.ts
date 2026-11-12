import {
  Project,
  SkillCategory,
  CompetitivePlatform,
  ExperienceItem,
  AchievementItem,
  CertificationItem,
  EducationItem,
} from '../types';

export const personalInfo = {
  name: 'Joseph Raja G',
  shortName: 'Joseph Raja',
  title: 'Full Stack Developer | Software Developer | AI Enthusiast',
  typingRoles: [
    'Full Stack Developer',
    'AI & Machine Learning Enthusiast',
    'Competitive Programmer',
    'FastAPI & React Engineer',
    'B.E. Computer Science 2027',
  ],
  bio: 'Computer Science undergraduate at KIT Coimbatore with hands-on expertise building full-stack AI-driven web systems, automating data quality pipelines, and tackling algorithmic challenges. Offline finalist at IIT Madras Shaastra 2026 NeuroHACK.',
  location: 'Tiruppur, Tamil Nadu, India',
  email: 'josephrajasr@gmail.com',
  phone: '+91 93456 54255',
  phoneRaw: '9345654255',
  avatarUrl: '/photo.jpg',
  resumeUrl: '/Joseph Raja G Resume.pdf',
  resumeFileName: 'Joseph_Raja_G_Resume.pdf',
  socialLinks: {
    github: 'https://github.com/JosephRajaG',
    linkedin: 'https://www.linkedin.com/in/joseph-raja-a516282a1',
    leetcode: 'https://leetcode.com/u/JosephRaja_G/',
    codechef: 'https://www.codechef.com/users/josephrajag',
    codeforces: 'https://codeforces.com/profile/JosephRajaG',
    atcoder: 'https://atcoder.jp/users/JosephRajaG',
    email: 'mailto:josephrajasr@gmail.com',
  },
  status: 'Open to Software Engineering & AI Internships',
};

export const educationData: EducationItem = {
  institution: 'KIT - Kalaignarkarunanidhi Institute of Technology',
  degree: 'B.E. in Computer Science and Engineering',
  period: '2023 – 2027',
  cgpa: '7.9 / 10.0',
  status: 'Final Year',
  location: 'Coimbatore, Tamil Nadu, India',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOPS)',
    'Operating Systems',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'Computer Architecture',
  ],
};

export const projectsData: Project[] = [
  {
    id: 'ai-tutor',
    title: 'AI Tutor – Emotion Adaptive Learning Platform',
    subtitle: 'Bio-Signal Emotion Recognition & Adaptive Neural Tutoring',
    description:
      'An intelligent adaptive education platform utilizing deep neural networks and physiological EEG & ECG signal processing to evaluate cognitive load and personalize learning in real time.',
    fullDescription: [
      'Developed an emotion classification engine using EEG & ECG signals to assess student attentiveness, confusion, and stress levels.',
      'Engineered an adaptive curriculum controller that dynamically alters problem difficulty, provides targeted hints, or pauses for recovery based on affective states.',
      'Selected and showcased as an offline finalist project at NeuroHACK, IIT Madras (Shaastra 2026).',
      'Integrated real-time ML inference with interactive educational feedback loops.',
    ],
    techStack: ['Python', 'Deep Neural Networks (DNN)', 'PyTorch', 'FastAPI', 'EEG/ECG Analysis', 'NumPy'],
    year: '2026',
    githubUrl: 'https://github.com/JosephRajaG/Ai-Tutor',
    liveUrl: '#',
    featured: true,
    category: 'AI & ML',
    imagePlaceholderGradient: 'from-violet-600/30 via-indigo-600/20 to-cyan-500/10',
    highlights: [
      'Shaastra 2026 IIT Madras Offline Finalist',
      'EEG & ECG Signal Classification',
      'Real-time Content Adaptation',
    ],
  },
  {
    id: 'ai-travel-planner',
    title: 'AI Powered Travel Planner',
    subtitle: 'Intelligent Day-Wise Itinerary & Budget Optimization Engine',
    description:
      'A full-stack intelligent itinerary generator with React frontend and FastAPI backend, generating personalized day-by-day itineraries with live Google Places and weather data.',
    fullDescription: [
      'Architected a full-stack AI-driven web application generating customized day-wise itineraries matching traveler persona and budget constraints.',
      'Implemented smart recommendation algorithms to suggest tailored attractions, culinary stops, and points of interest.',
      'Integrated Google Places API for venue verification and live weather forecasting for itinerary viability.',
      'Crafted an intuitive, fluid interface supporting solo, couple, family, and group travel modes with cost-aware trip budgeting.',
    ],
    techStack: ['React', 'FastAPI', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'Google Places API'],
    year: '2025',
    githubUrl: 'https://github.com/JosephRajaG/AI-Travel-Planner',
    liveUrl: '#',
    featured: true,
    category: 'Full Stack',
    imagePlaceholderGradient: 'from-cyan-600/30 via-blue-600/20 to-indigo-500/10',
    highlights: [
      'Personalized Day-Wise Itineraries',
      'Google Places & Weather APIs',
      'Cost-Aware Budget Optimizer',
    ],
  },
  {
    id: 'data-qa-copilot',
    title: 'AI Data Quality Copilot for B2B Datasets',
    subtitle: 'Automated Cleansing, Validation & Fuzzy Duplicate Resolution',
    description:
      'An enterprise data quality automation engine designed to sanitize, normalize, and validate large-scale B2B company and contact datasets with confidence scoring.',
    fullDescription: [
      'Developed an automated QA data pipeline processing high-volume B2B records to spot missing attributes, malformed formats, and anomalies.',
      'Implemented intelligent normalization rules including industry taxonomy standardization, country ISO mapping, and corporate domain inference.',
      'Engineered fuzzy matching and exact deduplication logic to merge fragmented records with transparent confidence scoring.',
      'Delivered structured JSON outputs alongside comprehensive data quality audit reports and actionable health metrics.',
    ],
    techStack: ['Python', 'Pandas', 'Fuzzy Matching', 'Data Validation', 'JSON / CSV', 'REST APIs'],
    year: '2026',
    githubUrl: 'https://github.com/JosephRajaG/Data_QA_Copilot',
    liveUrl: '#',
    featured: true,
    category: 'Data Engineering',
    imagePlaceholderGradient: 'from-emerald-600/30 via-teal-600/20 to-blue-500/10',
    highlights: [
      'High-Speed B2B Data Cleansing',
      'Fuzzy Record Deduplication',
      'Automated Quality Scoring & Reports',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Full Stack Development Intern',
    company: 'LearnLogicify Technologies',
    location: 'Coimbatore, India (Offline)',
    period: 'June 2025',
    type: 'Internship',
    description: [
      'Completed rigorous hands-on technical training covering modern HTML5, CSS3, and JavaScript (ES6+), building a robust foundation in web architectures.',
      'Tackled daily frontend challenges, built component-driven mini projects, and delivered architectural presentations.',
      'Strengthened practical understanding of DOM manipulation, responsive layouts, asynchronous APIs, and interactive UI design.',
      'Collaborated closely in an offline engineering environment following best coding practices and version control workflows.',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Frontend Architecture', 'Responsive UI', 'Git'],
  },
];

export const competitiveData: CompetitivePlatform[] = [
  {
    platform: 'LeetCode',
    maxRating: 1690,
    rankBadge: 'Top 3.4% Globally',
    solvedCount: '300+',
    highestRank: '5,869',
    highlightMetric: '300+ Solved',
    highlightLabel: 'Algorithmic Challenges',
    profileUrl: 'https://leetcode.com/u/JosephRaja_G/',
    extraDetails: [
      'Max Contest Rating: 1690',
      'Global Rank: Top 3.4%',
      '2 Official Contest Badges',
      'Highest Contest Rank: 5,869',
    ],
    colorScheme: {
      primary: '#F89F1B',
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      border: 'border-amber-500/30 hover:border-amber-400',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    },
  },
  {
    platform: 'CodeChef',
    maxRating: 1544,
    rankBadge: '2 Star Coder',
    solvedCount: '200+',
    highestRank: '1,478',
    highlightMetric: '2-Star',
    highlightLabel: 'Competitive Division',
    profileUrl: 'https://www.codechef.com/users/josephrajag',
    extraDetails: [
      'Max Rating: 1544',
      'Highest Contest Rank: 1,478',
      'Global Rating Rank: 27,379',
      '200+ Core DSA Problems Solved',
    ],
    colorScheme: {
      primary: '#A855F7',
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      border: 'border-purple-500/30 hover:border-purple-400',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    },
  },
  {
    platform: 'Codeforces',
    maxRating: 903,
    rankBadge: 'Newbie',
    highestRank: '10,302',
    highlightMetric: '903 Max',
    highlightLabel: 'Contest Rating',
    profileUrl: 'https://codeforces.com/profile/JosephRajaG',
    extraDetails: [
      'Max Rating: 903',
      'Contest Rank: 10,302',
      'Regular Participant in Div 3 & 4 Rounds',
      'Fast Implementation in C++ & Python',
    ],
    colorScheme: {
      primary: '#38BDF8',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      border: 'border-cyan-500/30 hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
  },
  {
    platform: 'AtCoder',
    maxRating: 300,
    rankBadge: '12 Kyu',
    highestRank: '4,368',
    highlightMetric: '4,368',
    highlightLabel: 'Global Contest Rank',
    profileUrl: 'https://atcoder.jp/users/JosephRajaG',
    extraDetails: [
      'Max Rating: 300',
      'Global Rank: 4,368',
      'Contest Division: 12 Kyu',
      'Strong Mathematical Problem Solving',
    ],
    colorScheme: {
      primary: '#10B981',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'neurohack-shaastra-2026',
    title: 'Offline Finalist at NeuroHACK',
    event: 'Shaastra 2026 (Tech Festival)',
    organizer: 'IIT Madras',
    year: '2026',
    badge: 'National Finalist',
    description:
      'Shortlisted from hundreds of nationwide teams in the online qualifying round to compete in the prestigious offline grand finals at IIT Madras during Shaastra 2026. Engineered and demonstrated an advanced Emotion Classification platform analyzing EEG & ECG bio-signals with machine learning.',
    impactTags: ['IIT Madras', 'Bio-Signal Processing', 'Machine Learning', 'EEG & ECG', 'National Stage'],
  },
  {
    id: 'hackathon-top25-2025',
    title: 'Ranked in Top 25 Finalists',
    event: '24-Hour Hackathon 2025',
    organizer: 'KIT Coimbatore',
    year: '2025',
    badge: 'Top 25',
    description:
      'Secured a Top 25 ranking among intense multi-departmental competitors in an intensive 24-hour non-stop hackathon, demonstrating rapid software prototyping, robust algorithmic problem-solving, and team endurance.',
    impactTags: ['24h Endurance', 'Competitive Hackathon', 'Rapid Prototyping', 'KIT Coimbatore'],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cisco-data-analytics',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    category: 'Data Analytics',
    skillsLearned: ['Data Analysis', 'Data Cleaning', 'Statistical Modeling', 'Insights & Reporting'],
  },
  {
    id: 'infosys-frontend',
    title: 'Frontend Web Development',
    issuer: 'Infosys Springboard',
    year: '2025',
    category: 'Frontend',
    skillsLearned: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Layouts', 'UI/UX Principles'],
  },
  {
    id: 'learnlogicify-fullstack',
    title: 'Full Stack Development Internship',
    issuer: 'LearnLogicify Technologies',
    year: '2025',
    category: 'Full Stack',
    skillsLearned: ['Full Stack Architecture', 'Web Interactivity', 'Project Delivery', 'Version Control'],
  },
  {
    id: 'coursera-python',
    title: 'Python Programming',
    issuer: 'Coursera',
    year: '2024',
    category: 'Programming',
    skillsLearned: ['Python Core', 'OOP Concepts', 'Data Structures', 'Algorithmic Problem Solving'],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 'Advanced', featured: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', featured: true },
      { name: 'C', level: 'Intermediate', featured: true },
      { name: 'Java', level: 'Intermediate', featured: false },
      { name: 'SQL', level: 'Intermediate', featured: true },
    ],
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 'Advanced', featured: true },
      { name: 'Tailwind CSS', level: 'Advanced', featured: true },
      { name: 'HTML5', level: 'Expert', featured: true },
      { name: 'CSS3', level: 'Advanced', featured: false },
      { name: 'Responsive Web Design', level: 'Advanced', featured: true },
      { name: 'Modern UI/UX', level: 'Intermediate', featured: false },
    ],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Intermediate', featured: true },
      { name: 'FastAPI', level: 'Intermediate', featured: true },
      { name: 'RESTful APIs', level: 'Advanced', featured: true },
      { name: 'MERN Stack', level: 'Intermediate', featured: true },
      { name: 'JSON Data Pipelines', level: 'Advanced', featured: false },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'SQL', level: 'Intermediate', featured: true },
      { name: 'PostgreSQL', level: 'Intermediate', featured: false },
      { name: 'MongoDB', level: 'Intermediate', featured: true },
      { name: 'DBMS Principles', level: 'Advanced', featured: false },
    ],
  },
  {
    title: 'AI, Data Science & ML',
    iconName: 'Brain',
    skills: [
      { name: 'Deep Neural Networks (DNN)', level: 'Applied', featured: true },
      { name: 'Pandas', level: 'Advanced', featured: true },
      { name: 'Fuzzy Matching', level: 'Advanced', featured: true },
      { name: 'EEG/ECG Signal Processing', level: 'Applied', featured: true },
      { name: 'Data Validation Automation', level: 'Advanced', featured: false },
    ],
  },
  {
    title: 'Tools & Environments',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', featured: true },
      { name: 'Android Studio', level: 'Intermediate', featured: true },
      { name: 'VS Code', level: 'Advanced', featured: false },
      { name: 'Vite', level: 'Advanced', featured: true },
      { name: 'Postman', level: 'Intermediate', featured: false },
      { name: 'Vercel', level: 'Intermediate', featured: false },
    ],
  },
  {
    title: 'Core CS Fundamentals',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms (200+ Solved)', level: 'Advanced', featured: true },
      { name: 'Object-Oriented Programming (OOPS)', level: 'Advanced', featured: true },
      { name: 'Operating Systems', level: 'Strong', featured: false },
      { name: 'Computer Networks', level: 'Strong', featured: false },
      { name: 'Computer Architecture', level: 'Strong', featured: false },
    ],
  },
];
