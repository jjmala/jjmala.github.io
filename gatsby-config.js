module.exports = {
  siteMetadata: {
    title: `Zhaklin Mala`,
    description: `Zhaklin Mala - Psicologo clinico, psicoterapeuta in formazione sistemico relazionale, interprete e mediatrice`,
    author: `@jjmala`,
    sources: 'https://github.com/jjmala/jjmala.github.io',
    contacts: {
      phone: '+39 333 10 42 066',
      email: 'zhaklin.mala@gmail.com',
      website: 'https://jjmala.github.io',
      project: 'https://malingering.netlify.app',
    },
    social: {
      github: 'https://github.com/jjmala',
      linkedin: 'https://linkedin.com/in/jacquelinemala',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zhaklinmala-resume`,
        short_name: `zhaklinmala-resume`,
        start_url: `/`,
        background_color: `#2979ff`,
        theme_color: `#2979ff`,
        display: `minimal-ui`,
        icon: `src/images/portfolio.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: 'swap',
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-MKCWNDK",
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
  ],
};
