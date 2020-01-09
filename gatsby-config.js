module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-medium-zoom`, // point!
            options: {
              //...
            }
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-123575007-2",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Stutter`,
    author: `diliburong`,
    description: `My site description...`,
    social: [
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
