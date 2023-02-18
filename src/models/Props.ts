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
}

export interface BlogPostProps {
  title: string;
  thumbnail: string;
  body: string;
  link: string;
}

export interface ProductProps {
  title: string;
  description: string;
  deployment: string;
  repo: string;
  demo: string;
}
