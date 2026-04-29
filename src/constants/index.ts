import { BiHome } from "react-icons/bi";
import type { NavItem, Social } from "../types/index.ts";
import {
  FaUser,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { BsSuitcase } from "react-icons/bs";

// NAV ITEMS
export const NAV_ITEMS: NavItem[] = [
  {
    href: "#home",
    label: "Home",
    icon: BiHome,
  },
  {
    href: "#projects",
    label: "Projects",
    icon: BsSuitcase,
  },
  {
    href: "#about",
    label: "About",
    icon: FaUser,
  },
  {
    href: "#experience",
    label: "Experience",
    icon: FaBriefcase,
  },
  {
    href: "#certifications",
    label: "Certifications",
    icon: FaCertificate,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: FaEnvelope,
  },
];

// SOCIAL LINKS
export const SOCIALS: Social[] = [
  {
    href: "https://www.linkedin.com/in/avranil-dhar",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "mailto:avranildhar@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://github.com/codewithavra",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://x.com/AvranilDhar",
    label: "X( Twitter )",
    icon: FaXTwitter,
  },
];