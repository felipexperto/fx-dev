const path = require('path');
const authors = require('./content/authors');

module.exports = {
  siteMetadata: {
    title: `FX DEV`,
    ...authors,
    description: `estude » (re)crie » compartilhe`,
    siteUrl: `https://www.fx.dev.br`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`
          },
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-abbr`, 
          {
            resolve: `gatsby-remark-emoji`,
            options: {
              emojiConversion: `shortnameToUnicode`,
              ascii: true,
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow, noopener, external"
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FX DEV`,
        short_name: `FX DEV`,
        start_url: `/`,
        background_color: `#272525`,
        theme_color: `#ffee17`,
        display: `minimal-ui`,
        icon: `src/images/blog-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
        utils: path.join(__dirname, 'src/utils'),
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M78LWT2",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "virtualPageView",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
