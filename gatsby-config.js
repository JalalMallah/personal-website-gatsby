module.exports = {
  siteMetadata: {
    title: `Jalal Mallah - Web Developer`,
    description: `The personal website and portfolio of Jalal Mallah, a Front-End Web Developer`,
    keywords: 'react, javascript, web development, website',
    author: `Jalal Mallah`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Jalal Mallah - Personal Website`,
        short_name: `JM Homepage`,
        start_url: `/`,
        background_color: `#efaa1f`,
        theme_color: `#60246a`,
        display: `standalone`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Poppins`,
              variants: [`400`, `500`, `700`],
              subsets: ['latin'],
            },
          ],
        },
      },
    },
  ],
};
