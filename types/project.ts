export interface Project {
  id: string;
  filename: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  tech: string[];
  url: string;
  rating: number;
  featured?: boolean;
}
