module.exports = {
  title: "Easy Jitsi Documentation",
  tagline: "The Only Documentation you'll Ever Need to Get Started with Jitsi",
  url: "https://docs.easyjitsi.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "easyjitsi", // Usually your GitHub org/user name.
  projectName: "docs.easyjitsi.com", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Easy Jitsi",
      logo: {
        alt: "Easy Jitsi",
        src: "img/logo.svg",
      },
      links: [
        {
          href: "https://easyjitsi.com",
          label: "Homepage",
          position: "right",
        },
        {
          href: "https://github.com/easyjitsi/docs.easyjitsi.com",
          label: "GitHub",
          position: "right",
        },
        {
          href:
            "https://github.com/easyjitsi/docs.easyjitsi.com/blob/master/LICENSE",
          label: "License",
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
              label: "Telegram",
              href: "https://t.me/easyjitsisuppport",
            },
          ],
        },

        {
          title: "License",
          items: [
            {
              label: "Apache 2.0",
              href:
                "https://github.com/easyjitsi/docs.easyjitsi.com/blob/master/LICENSE",
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
