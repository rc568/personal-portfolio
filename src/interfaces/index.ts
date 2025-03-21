export interface Article {
  title: string;
  dateRange: string;
  place: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  href?: string
  show?: boolean;
}

export interface Technologies {
  title: string,
  technologies: string[],
  show?: boolean,
}

export interface NavBar {
  title: string
  icon: string
  href: string
}