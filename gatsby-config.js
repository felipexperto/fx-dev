const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Site sem complicação`,
    authors: [
      {
        id: 1,
        name: `Felipe Marciano`,
        intro: `Sobre o autor`,
        bio: `dev front-end & ui designer. viciado em café, cinema e abraçar cachorros.`,
        social: {
          linkedin: {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/felipexperto`,
            boxicon: `linkedin-square`,
            show: true,
          },
          github: {
            name: `Github`,
            url: `https://github.com/felipexperto`,
            boxicon: `github`,
            show: true,
          },
          twitter: {
            name: `Twitter`,
            url: `https://twitter.com/felipexperto`,
            boxicon: `twitter`,
            show: true,
          },
          behance: {
            name: `Behance`,
            url: `https://www.behance.net/felipexperto`,
            boxicon: `behance`,
            show: true,
          },
          instagram: {
            name: `Instagram`,
            url: ``,
            boxicon: `instagram-alt`,
            show: false,
          },
          pinterest: {
            name: `Pinterest`,
            url: ``,
            boxicon: `pinterest`,
            show: false,
          },
          dribbble: {
            name: `Dribbble`,
            url: ``,
            boxicon: `dribbble`,
            show: false,
          },
          custom: {
            name: ``,
            url: ``,
            boxicon: `user-pin`,
            boxicon_type: `solid`,
            show: false,
          },
        },
      },
      {
        id: 2,
        name: `Daniele Gama`,
        intro: ``,
        bio: ``,
        social: {
          linkedin: {
            name: `LinkedIn`,
            url: ``,
            boxicon: `linkedin-square`,
            show: false,
          },
          github: {
            name: `Github`,
            url: ``,
            boxicon: `github`,
            show: false,
          },
          twitter: {
            name: `Twitter`,
            url: ``,
            boxicon: `twitter`,
            show: false,
          },
          behance: {
            name: `Behance`,
            url: ``,
            boxicon: `behance`,
            show: false,
          },
          instagram: {
            name: `Instagram`,
            url: ``,
            boxicon: `instagram-alt`,
            show: false,
          },
          pinterest: {
            name: `Pinterest`,
            url: ``,
            boxicon: `pinterest`,
            show: false,
          },
          dribbble: {
            name: `Dribbble`,
            url: ``,
            boxicon: `dribbble`,
            show: false,
          },
          custom: {
            name: ``,
            url: ``,
            boxicon: `user-pin`,
            boxicon_type: `solid`,
            show: false,
          },
        },
      }
    ],
    description: `estude » (re)crie » compartilhe`,
    siteUrl: `https://www.sitesemcomplicacao.com.br`,
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-132746020-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site Sem Complicação`,
        short_name: `Site Sem Complicação`,
        start_url: `/`,
        background_color: `#272525`,
        theme_color: `#ffee17`,
        display: `minimal-ui`,
        icon: `src/images/sitesemcomplicacao-icon.png`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-abbr`, 
            {
              resolve: `gatsby-remark-emoji`,
              options: {
                emojiConversion: `shortnameToUnicode`,
                ascii: true,
              }
            }
          ],
        },
    },
  ],
}
