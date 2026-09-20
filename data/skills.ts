import { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "WORDPRESS ECOSYSTEM",
    items: [
      { name: "WordPress", level: 95 },
      { name: "Custom Theme Dev", level: 90 },
      { name: "Plugin Development", level: 85 },
    ],
  },
  {
    title: "BACKEND & DATABASE",
    items: [
      { name: "PHP", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "Node.js", level: 45 },
    ],
  },
  {
    title: "SCRIPTING & WEB",
    items: [
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 35, learning: true },
    ],
  },
];
