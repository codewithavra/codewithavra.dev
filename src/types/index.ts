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
  | '#projects'
  | '#about'
  | '#experience'
  | '#certifications'
  | '#contact';
export type SectionLabel =
  | 'Home'
  | 'Projects'
  | 'About'
  | 'Experience'
  | 'Certifications'
  | 'Contact';
export type SocialLabel = 'LinkedIn' | 'Email' | 'GitHub' | 'X( Twitter )';

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
  icon : IconType
}
