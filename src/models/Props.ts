export interface HeroProps {
  heading: string;
}

export interface ProjectProps {
  title: string;
  thumbnail: string;
  href: string;
}

export interface NavLinkProps {
  text: string;
  altLink?: string;
  fontSize?: string;
  isExternal?: boolean;
  isNonLink?: boolean;
}

export interface BlogPostProps {
  id: string;
}

export interface ProductProps {
  title: string;
  description: string;
  deployment: string;
  repo: string;
  demo?: string;
  releaseDate: string;
}
