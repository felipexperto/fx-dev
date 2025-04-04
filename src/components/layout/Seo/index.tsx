/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { SeoProps } from './types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({
  description = '',
  lang = 'pt-br',
  meta = [],
  title,
  image = `${process.env.GATSBY_SITE_URL}/open-graph/blog-cover.png`,
}: SeoProps) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          authors {
            id
            name
            intro
            bio
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const ogImage = image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default Seo;
