import { Fact, ExperienceEntry } from "@/types/experience";

export const facts: Fact[] = [
  { value: "3+", label: "YEARS EXPERIENCE" },
  { value: "10+", label: "SITES SHIPPED" },
  { value: "5.0★", label: "CLIENT RATING" },
  { value: "PY", label: "CURRENTLY LEARNING" },
];

export const experience: ExperienceEntry[] = [
  {
    title: "WordPress Developer",
    company: "Current Company",
    duration: "3+ Years",
    points: [
      "Built and maintained custom WordPress themes and plugins for client projects across legal, media, and e-commerce sectors.",
      "Delivered full WooCommerce store builds, custom post types, and ACF-driven content structures.",
      "Collaborated directly with clients to scope, build, and ship production sites with a 5.0 average review rating.",
    ],
  },
];
