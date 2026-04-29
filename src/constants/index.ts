/**
 * Interfaces & Types
 */
import type { Certificate, NavItem, Social, Project } from '../types/index.ts';

/**
 * Icons
 */
import {
  FaUser,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
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
    href: '#projects',
    label: 'Projects',
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
    icon: FaLinkedin,
  },
  {
    href: 'mailto:avranildhar@gmail.com',
    label: 'Email',
    icon: FaEnvelope,
  },
  {
    href: 'https://github.com/codewithavra',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://x.com/AvranilDhar',
    label: 'X( Twitter )',
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

    imageSrc: '/certificates/java.png',

    issuedOn: '2025-10-01',
    institute: 'NPTEL (IIT Kharagpur)',

    credentialLink: 'https://nptel.ac.in',
  },
  {
    id: 'nptel-dbms',
    label: 'Introduction to Database Systems',
    description:
      'Focused on relational models, SQL, normalization, and transaction management.',

    imageSrc: '/certificates/dbms.png',

    issuedOn: '2025-04-01',
    institute: 'NPTEL (IIT Madras)',

    credentialLink: 'https://nptel.ac.in',
  },
  {
    id: 'mean-stack',
    label: 'Full Stack Development with MEAN Stack',
    description:
      '36-hour training on MongoDB, Express.js, Angular, and Node.js for full-stack applications.',

    imageSrc: '/certificates/mean.png',

    issuedOn: '2025-07-01',
    institute: 'Ardent Computech',

    credentialLink: 'https://ardentcollaborations.com',
  },
  {
    id: 'circuithon-finalist',
    label: 'Finalist — CIRCUITHON 2024',
    description:
      'Selected as a finalist among 150 participants in a circuit design competition.',

    imageSrc: '/certificates/circuithon.png',

    issuedOn: '2024-12-01',
    institute: 'IEEE IEM CAS Student Branch',
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
