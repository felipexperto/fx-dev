import React, { Fragment } from "react"
import { graphql } from "gatsby";

import Layout from "src/components/layout";
import PostsList from "src/components/postsList";
import { Title } from "src/components/title";
import SEO from "src/components/seo";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Fragment>
        <Layout location={this.props.location} title={siteTitle} bgColor='lightestgrey'>
          <SEO title="Todos os posts" />
          <Title margin='3rem auto'>Artigos</Title>
          <PostsList posts={posts} />
        </Layout>
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
