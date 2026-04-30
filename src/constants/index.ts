/**
 * Interfaces & Types
 */
import type { Certificate, NavItem, Social, Project, TechCategory } from '../types/index.ts';

/**
 * Icons
 */
import {
  FaUser,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaXTwitter,
  FaCode,
} from 'react-icons/fa6';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiPython,
} from 'react-icons/si';
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
    href: '#work',
    label: 'Work',
    icon: FaCode,
  },
  {
    href: '#about',
    label: 'About',
    icon: FaUser,
  },
  {
    href: '#experience',
    label: 'Experience',
    icon: FaBriefcase,
  },
  {
    href: '#certifications',
    label: 'Certifications',
    icon: FaCertificate,
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: FaEnvelope,
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
    id: 'nptel-java',
    label: 'Programming in Java',
    description:
      'Comprehensive course covering OOP, exception handling, and Java application development.',

    imageSrc: '/certifications/nptel.webp',
    issuedOn: '2025-10-01',
    institute: 'NPTEL (IIT Kharagpur)',

    credentialLink:
      'https://drive.google.com/file/d/1agacBu5IW2bWLwIDAFUAd8KeKEEHfymn/view?usp=drive_link',
  },
  {
    id: 'mean-stack',
    label: 'Full Stack Development with MEAN Stack',
    description:
      '36-hour training on MongoDB, Express.js, Angular, and Node.js for full-stack applications.',

    imageSrc: '/certifications/ardentinternships_logo.webp',
    issuedOn: '2025-07-01',
    institute: 'Ardent Computech',

    credentialLink:
      'https://drive.google.com/file/d/13iTsgmaVzgSL6XKRB54Ex-VuqH_bNfCr/view?usp=drive_link',
  },
  {
    id: 'ardent-python-django',
    label: 'Python with Django (30 Hours Training)',
    description:
      'Completed a 30-hour training program on Python with Django, covering backend development fundamentals and web application building.',

    imageSrc: '/certifications/ardentinternships_logo.webp', // save your uploaded image with this name
    issuedOn: '2025-02-12',
    institute: 'Ardent Computech Pvt. Ltd.',

    credentialLink: 'https://drive.google.com/file/d/1fuzO5S7_BZk5TWuGyMfjKZ6ZSXjblR-b/view?usp=drive_link', // optional: add if you upload to Drive
  },
  {
    id: 'nptel-dbms',
    label: 'Introduction to Database Systems',
    description:
      'Focused on relational models, SQL, normalization, and transaction management.',

    imageSrc: '/certifications/nptel.webp',
    issuedOn: '2025-04-01',
    institute: 'NPTEL (IIT Madras)',

    credentialLink:
      'https://drive.google.com/file/d/1eI2fjuNdI4Fa41D6DN0jOProuhJTvtuA/view?usp=drive_link',
  },
  {
    id: 'circuithon-finalist',
    label: 'Finalist — CIRCUITHON 2024',
    description:
      'Selected as a finalist among 150 participants in a circuit design competition.',

    imageSrc: '/certifications/IEM.webp',
    issuedOn: '2024-12-01',
    institute: 'IEEE IEM CAS Student Branch',

    credentialLink:
      'https://drive.google.com/file/d/1n7cmfufs192IG0bmjir4_ioeUTJOBD9G/view?usp=drive_link',
  },
];

/**
 * Projects
 */

export const PROJECTS: Project[] = [
  {
    id: 'tec-forecasting',
    label: 'Ionospheric TEC Forecasting using Deep Learning',
    description:
      'Time-series forecasting of ionospheric TEC using LSTM and Transformer seq2seq models on minute-level GNSS data.',

    githubLink: 'https://github.com/codewithavra/tec-forecasting',

    imageSrc: '/projects/tec.png',

    timeline: 'Mar 2026 – Present',
    techStack: [SiPython],

    highlights: [
      'Processed 41 days of GNSS TEC data (1440 steps/day)',
      'Implemented LSTM and Transformer architectures',
      'Used leakage-safe z-score normalization',
      'Evaluated with RMSE and MAE metrics',
    ],
  },
  {
    id: 'prettier-studio',
    label: 'Prettier Studio — Interactive Config Generator',
    description:
      'Web-based tool to generate Prettier configurations with real-time preview and multi-format export.',

    githubLink: 'https://github.com/codewithavra/prettier-studio',
    deployedLink: 'https://prettier-studio.vercel.app',

    imageSrc: '/projects/prettier.png',

    timeline: 'Apr 2026',
    techStack: [SiReact, SiTypescript, SiTailwindcss, SiVercel],

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
    techStack: [SiReact, SiTypescript, SiTailwindcss, SiVercel],

    highlights: [
      'Dynamic QR customization (size, color, ECC)',
      'Instant preview and multi-format download',
      'Canvas-based rendering',
      'Responsive UI across devices',
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