import React, { Fragment } from "react"
import { graphql } from "gatsby";

import App from "src/components/layout/App";
import PostsList from "src/components/layout/PostsList";
import { Title } from "src/components/UI/Title";
import SEO from "src/components/layout/Seo";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Fragment>
        <App location={this.props.location} title={siteTitle} bgColor='lightestgrey'>
          <SEO title="Todos os posts" />
          <Title margin='2rem auto'>Meus artigos</Title>
          <PostsList posts={posts} />
        </App>
      </Fragment>
    )
  }
}

export default BlogIndex

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
`
