import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { object, string } from 'prop-types';

import { App, NotFoundPageContent, SEO } from 'components/layout';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Fragment>
      <App location={location} title={siteTitle}>
        <SEO title={`404: Não encontrado | ${siteTitle}`} />
        <NotFoundPageContent />
      </App>
    </Fragment>
  );
};

NotFoundPage.propTypes = {
  data: object,
  location: string,
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
