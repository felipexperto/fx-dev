import React, { Fragment } from "react";
import { graphql } from "gatsby";

import App from "src/components/layout/App";
import SEO from "src/components/layout/Seo";
import PostContent from "src/components/layout/PostContent";
import PostNavigation from "src/components/layout/PostNavigation";

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Fragment>
        <App location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <PostContent
            authorId={post.frontmatter.authorid}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            post={post.html}
            title={post.frontmatter.title}
            tldr={post.frontmatter.tldr}
            update={post.frontmatter.update}
            timeToRead={post.timeToRead}
          />
          <PostNavigation
            previous={previous}
            next={next}
          />
        </App>
      </Fragment>
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
      timeToRead
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY", locale: "pt")
        update(formatString: "DD/MM/YYYY", locale: "pt")
        description
        authorid
        tldr
      }
    }
  }
`
