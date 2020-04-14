module.exports = {
  title: "Easy Jitsi Documentation",
  tagline: "Easy Jitsi Documentation",
  url: "https://docs.easyjitsi.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "easyjitsi", // Usually your GitHub org/user name.
  projectName: "easyjitsi", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Easy Jitsi Documentation",
      logo: {
        alt: " Site Logo",
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
              label: "Style Guide",
              to: "docs/welcome",
            },
            {
              label: "Second Doc",
              to: "docs/intro",
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
      },
    ],
  ],
};

module.exports = {
  plugins: ["@docusaurus/plugin-google-analytics"],
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-163579416-2",
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
  },
};
