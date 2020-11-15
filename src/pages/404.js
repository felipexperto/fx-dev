import React, { Fragment } from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import { GlobalStyles } from "styles";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Fragment>
        <GlobalStyles />  
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Não encontrado" />
          <h1>Oops!</h1>
          <p>Essa página não foi encontrada.</p>
        </Layout>
      </Fragment>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
