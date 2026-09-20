export interface SocialLinks {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  photo: string;
  status: string;
  bio: string[];
  social: SocialLinks;
  resumeUrl: string;
}
