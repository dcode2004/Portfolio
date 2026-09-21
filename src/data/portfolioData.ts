import {
  ExperienceItem,
  ProjectItem,
  AchievementItem,
  AcademicHonor,
  SkillCategory,
  EducationItem
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Devansh Vyas',
  role: 'Product Engineer',
  company: 'Deloitte',
  email: 'dvyas2004@gmail.com',
  phone: '+91 7742760775',
  githubHandle: 'dcode2004',
  githubUrl: 'https://github.com/dcode2004',
  linkedinUrl: 'https://www.linkedin.com/in/devansh-vyas',
  summary:
    'Building and maintaining production full-stack systems across React, TypeScript, Node.js, Python, and PostgreSQL. Experienced in debugging complex production codebases, designing backend APIs, implementing role-based access control, and engineering reliable data-processing services. Strong foundation in Data Structures & Algorithms with 1,000+ problems solved across competitive programming platforms.'
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'deloitte-pe',
    role: 'Product Engineer',
    company: 'Deloitte',
    period: 'Jan 2026 – Present',
    badge: 'Current',
    subtitle: 'Semester-long Intern (Jan – Jun 2026) · Converted to Full-Time (Jul 2026 – Present)',
    descriptionPoints: [
      'Build and maintain an enterprise due-diligence platform, working across React/TypeScript, Node.js/Express, Python services, and PostgreSQL.',
      'Resolved 50+ major defects across frontend and backend services, tracing issues through service boundaries to identify root causes and deliver production-ready fixes.',
      'Reworked platform-wide role-based user management, implementing access controls across 3+ user roles and strengthening authorization, API validation, and structured error handling.',
      'Delivered UI and workflow improvements from Figma designs and UAT feedback, working across Industry Benchmarks, Payroll Analyzer, and platform-level user management.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'RBAC', 'REST APIs']
  },
  {
    id: 'deloitte-intern',
    role: 'Product Engineer Intern',
    company: 'Deloitte',
    period: 'Jun 2025 – Jul 2025',
    subtitle: 'Summer Engineering Internship',
    descriptionPoints: [
      'Built Python and Pandas-based backend workflows for payroll data cleaning, parsing, transformation, and analysis across diverse client datasets.',
      'Designed data-processing logic to handle varying input formats reliably, improving the robustness and consistency of automated payroll analysis workflows.'
    ],
    technologies: ['Python', 'Pandas', 'Data Transformation', 'ETL Pipelines', 'Data Validation']
  },
  {
    id: 'lnmiit-ta',
    role: 'Teaching Assistant',
    company: 'The LNM Institute of Information Technology',
    period: 'Aug 2024 – May 2025',
    subtitle: 'Department of Computer Science & Engineering',
    descriptionPoints: [
      'Mentored 100+ students across Algorithm Design, Database Management Systems, and Computer Networking labs, helping students debug implementations and optimize solutions.',
      'Conducted hands-on lab sessions covering algorithms, databases, networking concepts, and practical problem-solving.'
    ],
    technologies: ['Algorithm Design', 'DBMS', 'Computer Networks', 'Debugging', 'Code Review']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cinepass',
    title: 'CinePass',
    subtitle: 'High-Concurrency Movie & Show Ticket Booking Platform',
    period: 'Full-Stack System',
    featured: true,
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Transactions'],
    githubUrl: 'https://github.com/dcode2004/CinePass',
    descriptionPoints: [
      'Built a full-stack movie and show ticket-booking platform supporting comprehensive movie, theater, show, user, and booking workflows.',
      'Implemented atomic seat-booking transactions to prevent double-booking under concurrent requests, with real-time seat availability updates.',
      'Implemented JWT authentication and role-based authorization with protected booking and administrative workflows.'
    ]
  },
  {
    id: 'instagram-automation',
    title: 'Instagram Comment Automation',
    subtitle: 'Meta Graph Webhook Ingestion & Workflow Execution Engine',
    period: 'Full-Stack Platform',
    featured: true,
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Meta Graph API', 'Webhooks'],
    githubUrl: 'https://github.com/dcode2004',
    descriptionPoints: [
      'Built an automation platform that triggers workflows from Instagram comments using the Meta Graph API, supporting keyword-based and all-comment triggers.',
      'Implemented non-blocking webhook ingestion to immediately acknowledge Meta events while executing automated comment replies and direct message workflows asynchronously in the background.'
    ]
  },
  {
    id: 'alumni-connect',
    title: 'Alumni Connect',
    subtitle: 'Institutional Alumni Network & Communication Platform',
    period: 'Full-Stack Web App',
    featured: false,
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dcode2004',
    descriptionPoints: [
      'Built a full-stack alumni networking platform with batch-wise directories, profiles, posts, authentication, and automated email notifications.',
      'Implemented Firebase-based authentication and file storage, JWT-protected backend APIs, and admin workflows for managing alumni content and users.'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    platform: 'LeetCode',
    roleOrRank: 'Knight',
    rating: 2059,
    ratingLabel: 'Contest Rating',
    problemsSolved: '700+ Solved',
    profileHandle: 'dcodeDV',
    profileUrl: 'https://leetcode.com/u/dcodeDV/',
    accentColor: '#f59e0b'
  },
  {
    platform: 'Codeforces',
    roleOrRank: 'Specialist',
    rating: 1573,
    ratingLabel: 'Contest Rating',
    problemsSolved: '300+ Solved',
    profileHandle: 'dcodeDV',
    profileUrl: 'https://codeforces.com/profile/dcodeDV',
    accentColor: '#38bdf8'
  },
  {
    platform: 'CodeChef',
    roleOrRank: '4-Star',
    rating: 1809,
    ratingLabel: 'Contest Rating',
    problemsSolved: 'Active Competitor',
    profileHandle: 'dcodedv',
    profileUrl: 'https://www.codechef.com/users/dcodedv',
    accentColor: '#a78bfa'
  }
];

export const ACADEMIC_HONOR: AcademicHonor = {
  title: 'Academic Distinction',
  metric: '14 A & 13 AB Grades',
  description: 'Conferred with 14 A and 13 AB grades across diverse disciplines, awarded to the top 10% of students institute-wide at LNMIIT.'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['C / C++', 'Java', 'Python', 'JavaScript / TypeScript', 'SQL', 'HTML / CSS']
  },
  {
    category: 'Frameworks & Technologies',
    items: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS']
  },
  {
    category: 'Core Computer Science',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOPS)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
      'Computer Organisation & Architecture'
    ]
  },
  {
    category: 'Developer Tools',
    items: ['Git & GitHub', 'Linux CLI', 'Postman', 'VS Code', 'IntelliJ IDEA']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'The LNM Institute of Information Technology',
    period: '2022 – 2026',
    score: '8.71 / 10',
    scoreType: 'GPA',
    details: 'Top 10% institute-wide academic standing with 14 A and 13 AB grades'
  },
  {
    degree: 'Senior Secondary (Class XII) — CBSE',
    institution: 'Central Board of Secondary Education',
    period: '2022',
    score: '97 / 100',
    scoreType: 'Score',
    details: 'Physics, Chemistry, Mathematics, and Computer Science'
  },
  {
    degree: 'Secondary School (Class X) — CBSE',
    institution: 'Central Board of Secondary Education',
    period: '2020',
    score: '96 / 100',
    scoreType: 'Score',
    details: 'High distinction across core subjects'
  }
];
