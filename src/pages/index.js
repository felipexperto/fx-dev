import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { object } from 'prop-types';

import { App, PostsList, SEO } from 'components/layout';
import { Tipography } from 'components/UI';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Fragment>
      <App location={location} title={siteTitle} bgColor="yellow">
        <SEO title={`Todos os posts | ${siteTitle}`} />
        <Tipography as="h2" color="white" margin="2rem auto 0 auto">
          Todos os posts
        </Tipography>
        <Tipography
          as="h3"
          color="lightgrey"
          fontSize="0.875rem"
          fontWeight="normal"
        >
          Ordenados por &quot;Mais Recentes&quot;
        </Tipography>
        <PostsList posts={posts} />
      </App>
    </Fragment>
  );
};

BlogIndex.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY", locale: "pt")
            title
            description
            category
          }
        }
      }
    }
  }
`;
