import { Author, SiteData, AuthorSocialProfile, SocialNetwork } from 'types';

export const shouldNetworkBeVisible = (item: SocialNetwork) =>
  item.show === true;

export const filterSocialNetworks = (social: AuthorSocialProfile) =>
  Object.entries(social)
    .map((item) => item[1])
    .filter(shouldNetworkBeVisible);

export const filterAuthorById = (authorid: number, data: SiteData) => {
  return data.site.siteMetadata.authors.filter(
    (item: Author) => item.id === authorid
  );
};
