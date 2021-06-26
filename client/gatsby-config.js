require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "The Lippy J",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          preview: true,
        },
        url: process.env.GATSBY_CMS_ENDPOINT,
        schema: {
          timeout: 60000,
          perPage: 100, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
        searchAndReplace: [{
          search: process.env.WORDPRESS_URL,
          replace: process.env.GATSBY_URL,
        }],
        type: {
          User: {
            exclude: true,
          },
          UserRole: {
            exclude: true,
          },
          Tag: {
            exclude: true,
          },
          Comment: {
            exclude: true,
          }
        }
      },
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'night-owl'
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
  ],
};
