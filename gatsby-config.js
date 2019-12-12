module.exports = {
  siteMetadata: {
    title: `La Maison Saint Gobain`,
    description: `Description`,
    author: `Raphaël DIDIER`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://uat-saint-gobain-fr.content.saint-gobain.io/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
        basicAuth: {
          username: 'SGdev',
          password: 'MartinRouterKing!11',
        },
      },
    },
  ],
}
