/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from 'src/components/avatar';
import avatarFelipe from 'src/images/authors/sitesemcomplicacao-felipemarciano.png';
import avatarDaniele from 'src/images/authors/sitesemcomplicacao-danielegama.jpg';

import { rhythm } from "src/utils/typography"

const Bio = ({ authorId }) => {

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          authors {
            id name social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    }
  `);

  const postAuthorInfo = data.site.siteMetadata.authors.filter(item => item.id === authorId);
  const { name, social: { twitter, linkedin, github } } = postAuthorInfo[0];
  
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Avatar
        authorAvatar={authorId === 1 ? avatarFelipe : avatarDaniele}
        authorName={name}
      />
      <p>
        Criado por <strong>{name}</strong>.<br />
        Que pode ser encontrado no:
        {` `}
        <a href={`https://twitter.com/${twitter}`}>
          Twitter
        </a> | <a href={`https://www.linkedin.com/in/${linkedin}`}>
          LinkedIn
        </a> | <a href={`https://github.com/${github}`}>
          Github
        </a>
      </p>
    </div>
  )
}

Bio.defaultProps = {
  authorId: 1,
}

Bio.propTypes = {
  authorId: PropTypes.number,
}

export default Bio
