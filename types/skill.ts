export interface SkillItem {
  name: string;
  level: number; // 0-100
  learning?: boolean;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}
