import React from 'react';
import { graphql } from 'gatsby';
import { object } from 'prop-types';
import { BlogPostTemplateProps } from '../types';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { App, PostContent, PostNavigation, Seo } from 'components/layout';

deckDeckGoHighlightElement();

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  console.log({ data, pageContext });

  const postBody = data.markdownRemark;
  const postHead = postBody.frontmatter;
  const siteTitle = data.site.siteMetadata.title;

  const { html } = postBody;
  const { previous, next } = pageContext;
  const {
    authorid,
    date,
    description,
    excerpt,
    timeToRead,
    title,
    tldr,
    update,
  } = postHead;

  return (
    <>
      <App title={siteTitle} bgColor="yellow">
        <Seo
          title={`${title} | ${siteTitle}`}
          description={description || excerpt}
        />
        <PostContent
          authorid={authorid}
          date={date}
          description={description}
          post={html}
          timeToRead={timeToRead}
          title={title}
          tldr={tldr}
          update={update}
        />
        <PostNavigation previous={previous} next={next} />
      </App>
    </>
  );
};

BlogPostTemplate.propTypes = {
  data: object,
  location: object,
  pageContext: object,
};

export default BlogPostTemplate;

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
`;
