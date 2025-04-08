import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { App, NotFoundPageContent, Seo } from 'components/layout';

const NotFoundPage = ({ data, location }: { data: any; location: string }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Fragment>
      <App location={location} title={siteTitle}>
        <Seo title={`404: Não encontrado | ${siteTitle}`} />
        <NotFoundPageContent />
      </App>
    </Fragment>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
