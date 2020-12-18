import { useStaticQuery, graphql } from "gatsby";

const shouldNetworkBeVisible = item => item.show === true;
const getSocialNetworks = item => item.map((item) => item[1]).filter(shouldNetworkBeVisible);

const GetAuthorInfo = (authorId) => {

  const data = useStaticQuery(graphql`
  query BioQuery {
    site {
      siteMetadata {
        authors {
          id name intro bio social {
            behance { 
              name url boxicon show
            }
            dribbble { 
              name url boxicon show
            }
            github { 
              name url boxicon show
            }
            instagram { 
              name url boxicon show
            }
            linkedin { 
              name url boxicon show
            }
            pinterest { 
              name url boxicon show
            }
            twitter { 
              name url boxicon show
            }
            custom { 
              name url boxicon boxicon_type show
            }
          }
        }
      }
    }
  }
  `);

  const authorIdInsideArray = authorId - 1;
  const postAuthorInfo = data.site.siteMetadata.authors.filter(item => item.id === authorId);
  const { bio, name, intro, social } = postAuthorInfo[authorIdInsideArray];
  const socialArr = getSocialNetworks(Object.entries(social));

  return {
    authorBio: bio,
    authorName: name,
    authorIntro: intro,
    authorSocial: socialArr,
  }

}

export default GetAuthorInfo;
