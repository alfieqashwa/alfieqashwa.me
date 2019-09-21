module.exports = {
  siteMetadata: {
    title: `Celloworld`,
    name: `Celloworld`,
    siteUrl: `https://www.alfieqashwa.me`,
    description: `Alfie Qashwa Personal Site to Learn In The Public.`,
    hero: {
      heading: 'Cello, World! <a href="/portfolio">Portfolio</a>',

      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/alfieqashwa`
      },
      {
        name: `github`,
        url: `https://github.com/alfieqashwa`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/alfieqashwa`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alfie Qashwa`,
        short_name: `Celloworld`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134432059-1`,
      },
    },
  ]
};
