module.exports = {
  siteMetadata: {
    title: "furwers.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "xxx",
      },
    },
    "gatsby-plugin-react-helmet",
    //"gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    `gatsby-transformer-remark`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog_posts",
        path: "./data/blog_posts",
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog_images",
        path: "./data/images/",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

  ],
};
