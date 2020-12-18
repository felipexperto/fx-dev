import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { object, string } from 'prop-types';

import App from 'src/components/layout/App';
import SEO from 'src/components/layout/Seo';

import { Title } from 'src/components/UI/Title';
class NotFoundPage extends React.Component {
  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    // @TODO: Criar um arquivo de estilos para esta página
    // e resolver essa barberagem

    // @TODO: Remover esse estilo inline
    // e estipular padrões de tamanhos de títulos
    // e nomenclaturas: primary, secondary, ...

    const titleInlineStyle = {
      'font-size': '40px',
      'font-weight': 'bolder',
      'text-align': 'center',
      'margin-bottom': '0',
    };
    // @TODO: Substituir subtitle por um tipo de Title
    const Subtitle = ({ children }) => {
      const styles = {
        'font-family': 'Inter, sans-serif',
        'font-size': '18px',
        'text-align': 'center',
      }
      return (
        <p style={styles}>
          { children }
        </p>
      )
    };
    const Anchor = ({ children, url }) => {
      const styles = {
        'font-family': 'Inter, sans-serif',
        'font-size': '18px',
        'text-align': 'center',
        'text-decoration': 'none',
      }
      return (
        <a href={url} style={styles}>
          { children }
        </a>
      );
    };
    const ContainerForFewContentPage = ({ children }) => {
      const styles = {
        'align-items': 'middle',
        'display': 'flex',
        'flex-direction': 'column',
        'height': '50vh',
        'justify-content': 'center',
      };
      return (
        <div style={styles}>
          { children }
        </div>
      )
    };

    return (
      <Fragment>
        <App location={location} title={siteTitle}>
          <SEO title="404: Não encontrado" />
          <ContainerForFewContentPage>
            <Title style={titleInlineStyle}>Oops!</Title>
            <Subtitle>Essa página não foi encontrada.</Subtitle>
            <Anchor url="/">Clique aqui e volte para a página principal.</Anchor>
          </ContainerForFewContentPage>
        </App>
      </Fragment>
    )
  }
}

NotFoundPage.propTypes = {
  data: object,
  location: string,
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
