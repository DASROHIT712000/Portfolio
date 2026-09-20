import { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Rohit Das",
  role: "WordPress Developer",
  tagline: "WordPress Developer · Custom Themes & Plugins · PHP / MySQL",
  photo: "/images/profile.png",
  status: "available for work",
  bio: [
    "I'm a WordPress developer with 3+ years of hands-on experience, currently working full-time building and maintaining client websites — from custom theme development to complex plugin logic.",
    "My focus is practical, deal-focused engineering: clean PHP, well-structured MySQL, and themes built for speed and easy long-term maintenance rather than bloated page-builder output.",
    "Outside of client work, I'm sharpening my JavaScript and Node.js fundamentals and currently learning Python to move further into backend and automation work.",
  ],
  social: {
    // TODO: replace with your real contact details
    email: "rohitdas.dev@gmail.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/in/rohitdas-dev",
    github: "github.com/rohitdas-dev",
  },
  resumeUrl: "/resume.pdf",
};
