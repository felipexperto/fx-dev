import React from "react";
import { graphql } from "gatsby";

import Layout from "src/components/layout";
import SEO from "src/components/seo";
import PostContent from "src/components/postContent";
import PostNavigation from "src/components/postNavigation";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostContent
          authorId={post.frontmatter.authorid}
          date={post.frontmatter.date}
          post={post.html}
          title={post.frontmatter.title}
        />
        <PostNavigation
          previous={previous}
          next={next}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD / MM / YYYY", locale: "pt")
        description
        authorid
      }
    }
  }
`
