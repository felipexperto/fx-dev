import { useStaticQuery, graphql } from 'gatsby';
import { Author } from 'types';
import { filterAuthorById, filterSocialNetworks } from './helpers';

const useAuthorInfo = (authorId: number) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          authors {
            id
            name
            intro
            bio
            social {
              behance {
                name
                url
                boxicon
                show
              }
              dribbble {
                name
                url
                boxicon
                show
              }
              github {
                name
                url
                boxicon
                show
              }
              instagram {
                name
                url
                boxicon
                show
              }
              linkedin {
                name
                url
                boxicon
                show
              }
              pinterest {
                name
                url
                boxicon
                show
              }
              twitter {
                name
                url
                boxicon
                show
              }
              custom {
                name
                url
                boxicon
                boxicon_type
                show
              }
            }
          }
        }
      }
    }
  `);

  const postAuthorInfo: Author[] = filterAuthorById(authorId, data);

  const { bio, name, intro, social }: Author = postAuthorInfo[0];
  const socialArr = filterSocialNetworks(social);

  return {
    authorBio: bio,
    authorName: name,
    authorIntro: intro,
    authorSocial: socialArr,
  };
};

export default useAuthorInfo;
