module.exports = {
  title: "Easy Jitsi Documentation",
  tagline: "Easy Jitsi Documentation",
  url: "docs.easyjitsi.com",
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
          href: "https://github.com/easyjitsi/easyjitsi",
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
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
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
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
