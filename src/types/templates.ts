export type PostContentProps = {
  authorid?: number;
  date?: string;
  description?: string;
  excerpt?: string;
  post?: string;
  timeToRead?: string;
  title?: string;
  tldr?: string;
  update?: string;
};

export type BlogPostTemplateProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    markdownRemark: {
      id: string;
      excerpt: string;
      html: string;
      timeToRead: number;
      frontmatter: PostContentProps;
    };
  };
  pageContext: {
    next: any;
    previous: any;
    slug: string;
  };
};
