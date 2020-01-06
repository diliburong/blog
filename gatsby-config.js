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
