/**
 * Interfaces & Types
 */
import type { Certificate, NavItem, Social, Project, TechCategory, Education } from '../types/index.ts';

/**
 * Icons
 */
import {
  FaUser,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaXTwitter,
  FaCode,
} from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import { IoLogoLinkedin } from "react-icons/io5";
/**
 * NavItems
 */
export const NAV_ITEMS: NavItem[] = [
  {
    href: '#home',
    label: 'Home',
    icon: HiHome,
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: FaEnvelope,
  },
  {
    href: '#about',
    label: 'About',
    icon: FaUser,
  },
  {
    href: '#work',
    label: 'Work',
    icon: FaCode,
  },
  {
    href: '#certifications',
    label: 'Certifications',
    icon: FaCertificate,
  },
];

/**
 * Social Links
 */
export const SOCIALS: Social[] = [
  {
    href: 'https://www.linkedin.com/in/avranil-dhar',
    label: 'LinkedIn',
    icon: IoLogoLinkedin,
  },
  {
    href: 'https://github.com/codewithavra',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://x.com/AvranilDhar',
    label: 'X / Twitter',
    icon: FaXTwitter,
  },
];

/**
 * Certificates
 */
export const CERTIFICATES: Certificate[] = [
  {
    id: 'infosys-springboard-gcp-1',
    label: 'Learning Google Cloud Platform',
    description:
      'Comprehensive course on Google Cloud Platform.',

    imageSrc: 'https://skillicons.dev/icons?i=gcp',
    issuedOn: '2026-08-01',
    institute: 'INFOSYS | Springboard',

    credentialLink:
      'https://drive.google.com/file/d/1fqD5MgVtsUkA2xnEiOdDv1pvl-TGGnXn/view?usp=sharing',
  },
  {
    id: 'infosys-springboard-gcp-2',
    label: 'Introduction to GCP: Fundamentals of Google Cloud Platform',
    description:
      'Comprehensive course covering Fundamentals of Google Cloud Platform.',

    imageSrc: 'https://skillicons.dev/icons?i=gcp',
    issuedOn: '2026-08-01',
    institute: 'INFOSYS | Springboard',

    credentialLink:
      'https://drive.google.com/file/d/1Ve6xHFtDJ5JlynqTns_LeGzOOu1ZXUu4/view?usp=sharing',
  },
  {
    id: 'nptel-java',
    label: 'Programming in Java',
    description:
      'Comprehensive course covering OOP, exception handling, and Java application development.',

    imageSrc: 'https://skillicons.dev/icons?i=java',
    issuedOn: '2025-10-01',
    institute: 'NPTEL (IIT Kharagpur)',

    credentialLink:
      'https://drive.google.com/file/d/1agacBu5IW2bWLwIDAFUAd8KeKEEHfymn/view?usp=sharing',
  },
  {
    id: 'mean-stack',
    label: 'Full Stack Development with MEAN Stack',
    description:
      '36-hour training on MongoDB, Express.js, Angular, and Node.js for full-stack applications.',

    imageSrc: 'https://skillicons.dev/icons?i=angular',
    issuedOn: '2025-07-01',
    institute: 'Ardent Computech',

    credentialLink:
      'https://drive.google.com/file/d/13iTsgmaVzgSL6XKRB54Ex-VuqH_bNfCr/view?usp=sharing',
  },
  {
    id: 'ardent-python-django',
    label: 'Python with Django',
    description:
      'Completed a 30-hour training program on Python with Django, covering backend development fundamentals and web application building.',

    imageSrc: 'https://skillicons.dev/icons?i=django', // save your uploaded image with this name
    issuedOn: '2025-02-12',
    institute: 'Ardent Computech Pvt. Ltd.',

    credentialLink: 'https://drive.google.com/file/d/1fuzO5S7_BZk5TWuGyMfjKZ6ZSXjblR-b/view?usp=sharing', // optional: add if you upload to Drive
  },
  {
    id: 'nptel-dbms',
    label: 'Introduction to Database Systems',
    description:
      'Focused on relational models, SQL, normalization, and transaction management.',

    imageSrc: 'https://skillicons.dev/icons?i=mysql',
    issuedOn: '2025-04-01',
    institute: 'NPTEL (IIT Madras)',

    credentialLink:
      'https://drive.google.com/file/d/1eI2fjuNdI4Fa41D6DN0jOProuhJTvtuA/view?usp=sharing',
  },
  {
    id: 'circuithon-finalist',
    label: 'Finalist - Circuithon 2024',
    description:
      'Selected as a finalist among 150 participants in a circuit design competition.',

    imageSrc: 'https://skillicons.dev/icons?i=arduino',
    issuedOn: '2024-12-01',
    institute: 'IEEE IEM CAS Student Branch',

    credentialLink:
      'https://drive.google.com/file/d/1n7cmfufs192IG0bmjir4_ioeUTJOBD9G/view?usp=sharing',
  },
];

/**
 * Projects
 */

export const PROJECTS: Project[] = [
  {
    id: 'Developer Portfolio',
    label: 'Developer Portfolio',
    description:
      'Personal portfolio showcasing projects, certifications, and technical skills with a modern UI and responsive design.',

    githubLink: 'https://github.com/codewithavra/codewithavra.dev', // update if different
    deployedLink: 'https://codewithavra.vercel.app/',

    imageSrc: '/projects/portfolio.png',

    timeline: 'Apr 2026',
    techStack: ['React', 'Typescript', 'Tailwindcss', 'Vercel'],

    highlights: [
      'Responsive and modern UI',
      'Section-based navigation',
      'Optimized performance and SEO',
      'Reusable component architecture',
    ],
  },
  {
    id: 'prettier-studio',
    label: 'Prettier Studio — Interactive Config Generator',
    description:
      'Web-based tool to generate Prettier configurations with real-time preview and multi-format export.',

    githubLink: 'https://github.com/codewithavra/prettier-config-generator',
    deployedLink: 'https://prettierstudio.vercel.app/',

    imageSrc: '/projects/prettier.png',

    timeline: 'Apr 2026',
    techStack: ['React', 'Typescript', 'Tailwindcss', 'Vercel'],

    highlights: [
      'Live config preview',
      'Supports JSON, YAML, and JS export',
      'Integrated Prettier plugins and js-yaml',
      'Optimized Tailwind class ordering',
    ],
  },
  {
    id: 'qr-craft',
    label: 'QR Craft — Custom QR Code Generator',
    description:
      'Customizable QR generator with real-time rendering, styling controls, and downloadable output.',

    githubLink: 'https://github.com/codewithavra/QR-Code-Generator',
    deployedLink: 'https://qr-craft-iota.vercel.app/',

    imageSrc: '/projects/qr.png',

    timeline: 'Apr 2026',
    techStack: ['React', 'Typescript', 'Tailwindcss', 'Vercel'],

    highlights: [
      'Dynamic QR customization (size, color, ECC)',
      'Instant preview and multi-format download',
      'Canvas-based rendering',
      'Responsive UI across devices',
    ],
  },
  {
    id: 'Ionosperic-TEC-Forecasting',
    label: 'Ionospheric TEC Forecasting using Deep Learning',
    description:
      'Time-series forecasting of ionospheric TEC using LSTM and Transformer seq2seq models on minute-level GNSS data.',

    githubLink: 'https://github.com/codewithavra/ionospheric-tec-forecasting',

    imageSrc: '/projects/tec.png',

    timeline: 'Mar 2026 – Jul 2026',
    techStack: ['Python', 'Matplotlib', 'Numpy', 'PyTorch', 'Jupyter Notebook'],

    highlights: [
      'Processed 41 days of GNSS TEC data (1440 steps/day)',
      'Implemented LSTM and Transformer architectures',
      'Used leakage-safe z-score normalization',
      'Evaluated with RMSE and MAE metrics',
    ],
  },
];


/**
 * TechStack
 */

export const TECH_STACK: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Bun", icon: "bun" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL", icon: "postgresql" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
    ],
  },
  {
    label: "Tools & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Linux", icon: "linux" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];



export const EDUCATION: Education[] = [
  {
    institution: "Narula Institute of Technology",
    degree: "B.Tech",
    field: "Electronics & Communication Engineering",
    grade: "9.39",
    gradeType: "CGPA",
    period: "Aug, 2023~Present",
    location: "Kolkata",
  },
  {
    institution: "Kalyan Nagar Vidyapith",
    degree: "10+2 (W.B.C.H.S.E)",
    field: "Pure Science",

    grade: "80",
    gradeType: "percentage",
    period: "2022",
    location: "Kolkata",
  },
  {
    institution: "Kalyan Nagar Vidyapith",
    degree: "10 (W.B.B.S.E)",
    grade: "81",
    gradeType: "percentage",
    period: "2020",
    location: "Kolkata",
  },
];