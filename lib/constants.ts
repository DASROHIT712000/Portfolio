export const NAV_LINKS = [
  { id: "about", label: "About", href: "/about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "resume", label: "Resume", href: "/#resume" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const SITE = {
  name: "Rohit Das",
  domain: "rohit-das.dev",
  title: "Rohit Das — WordPress Developer",
  description:
    "WordPress Developer with 3+ years building custom themes, plugins, and full-stack web solutions with PHP and MySQL.",
} as const;
