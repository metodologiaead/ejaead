module.exports = {
  siteMetadata: {
    title: `EJA EAD`,
    description: `Ensino Médio e Fundamental de 1 a 6 Meses`,
    author: `@rick1pg`,
    siteUrl: 'https://ejaead.metodologiaead.com.br',
    pathPrefix: "/metodologiaead/supletivo",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `valor`,
        path: `${__dirname}/valor`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EJA EAD`,
        short_name: `EJA EAD`,
        start_url: `/`,
        background_color: `#24234b`,
        theme_color: `#24234b`,
        display: `minimal-ui`,
        icon: `src/images/favicon-nexus.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`,
  ],
}
