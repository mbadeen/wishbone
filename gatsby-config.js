require("dotenv").config();

module.exports = {
  jsxRuntime: "automatic",

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/assets/images/logo.svg",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en-US",
      },
    },
  ],
  siteMetadata: {
    description: `Wishbone delicious broasted chicken, proudly serving the community since 1957.`,
    siteUrl: `https://www.wishbonefamouschicken.com`,
    title: `Wishbone Broasted Chicken`,
  },
};
