module.exports = {
  title: "Easy Jitsi Documentation",
  tagline: "The Only Documentation you'll Ever Need to Get Started with Jitsi",
  url: "https://docs.easyjitsi.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "easyjitsi", // Usually your GitHub org/user name.
  projectName: "easyjitsi", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Easy Jitsi Documentation",
      logo: {
        alt: "Easy Jitsi",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/welcome",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/easyjitsi/docs.easyjitsi.com",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Home Page",
              to: "https://easyjitsi.com",
            },
            {
              label: "Help",
              to: "docs/help",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Main Website",
              href: "https://easyjitsi.com",
            },
            {
              label: "Telegram",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/easyjitsi/easyjitsi",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}  Easy Jitsi`,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/easyjitsi/docs.easyjitsi.com",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        gtag: {
          trackingID: "UA-163579416-2",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};

// module.exports = {
//};
