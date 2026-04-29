/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Types
 */
import type { IconType } from 'react-icons';

export type Href =
  | '#home'
  | '#work'
  | '#about'
  | '#experience'
  | '#certifications'
  | '#contact';
export type SectionLabel =
  | 'Home'
  | 'Work'
  | 'About'
  | 'Experience'
  | 'Certifications'
  | 'Contact';
export type SocialLabel = 'LinkedIn' | 'Email' | 'GitHub' | 'X / Twitter';
export type ISODateString = `${number}-${number}-${number}`;
/**
 * Interface
 */
export interface NavItem {
  href: Href;
  label: SectionLabel;
  icon: IconType;
}

export interface Social {
  href: string;
  label: SocialLabel;
  icon: IconType;
}

export interface Project {
  id: string;
  label: string;
  description: string;
  githubLink: string;
  deployedLink?: string; // optional if not live
  imageSrc: string;
  timeline: string; // e.g., "Apr 2026 – May 2026"
  techStack: IconType[];
  highlights?: string[]; // optional bullets
}

export interface Certificate {
  id: string;
  label: string;
  description: string;
  imageSrc: string;
  issuedOn: ISODateString;
  institute: string;
  credentialLink?: string;
}
