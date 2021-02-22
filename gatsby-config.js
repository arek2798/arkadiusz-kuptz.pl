require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-181240429-1",
        head: true,
        anonymize: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            weights: ['400', '500', '700']
          },
          {
            family: `Poppins`,
            variants: ['400', '500', '700']
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.arkadiusz-kuptz.pl/',
        policy: [{ userAgent: 'Googlebot-Image', disallow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#449EC6`,
        theme_color: `#449EC6`,
        display: `minimal-ui`,
        // icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
        // icons: [
        //   {
        //     "src": "src/assets/images/favicon.png",
        //     "sizes": "16x16",
        //     "type": "image/png",
        //     "purpose": "any maskable" // <-- New property value `"maskable"`
        //   }
        // ]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
