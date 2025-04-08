export type SocialNetwork = {
  name: string;
  url: string;
  boxicon: string;
  show: boolean;
  boxicon_type?: string;
};

export type AuthorSocialProfile = {
  behance?: SocialNetwork;
  dribbble?: SocialNetwork;
  github?: SocialNetwork;
  instagram?: SocialNetwork;
  linkedin?: SocialNetwork;
  pinterest?: SocialNetwork;
  twitter?: SocialNetwork;
  custom?: SocialNetwork;
};

export type Author = {
  id: number;
  name: string;
  intro: string;
  bio: string;
  social: AuthorSocialProfile;
};

export type SiteMetadata = {
  authors: Author[];
};

export type Site = {
  siteMetadata: SiteMetadata;
};

export type SiteData = {
  site: Site;
};
