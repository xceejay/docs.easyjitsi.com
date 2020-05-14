export default {
  "plugins": [
    [
      "@docusaurus/plugin-sitemap",
      {
        "cacheTime": 600000,
        "changefreq": "weekly",
        "priority": 0.5
      }
    ]
  ],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "disableDarkMode": false,
    "navbar": {
      "title": "Easy Jitsi",
      "logo": {
        "alt": "Easy Jitsi",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "href": "https://easyjitsi.com",
          "label": "Homepage",
          "position": "right"
        },
        {
          "href": "https://github.com/easyjitsi/docs.easyjitsi.com",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://github.com/easyjitsi/docs.easyjitsi.com/blob/master/LICENSE",
          "label": "License",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Home Page",
              "to": "https://easyjitsi.com"
            },
            {
              "label": "Help",
              "to": "docs/help"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Telegram",
              "href": "https://t.me/easyjitsisuppport"
            }
          ]
        },
        {
          "title": "License",
          "items": [
            {
              "label": "Apache 2.0",
              "href": "https://github.com/easyjitsi/docs.easyjitsi.com/blob/master/LICENSE"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020  Easy Jitsi"
    }
  },
  "title": "Easy Jitsi Documentation",
  "tagline": "The Only Documentation you'll Ever Need to Get Started with Jitsi",
  "url": "https://docs.easyjitsi.com",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "easyjitsi",
  "projectName": "docs.easyjitsi.com",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/code/projects/docs.easyjitsi.com/sidebars.js",
          "editUrl": "https://github.com/easyjitsi/docs.easyjitsi.com/edit/master"
        },
        "theme": {
          "customCss": "/home/code/projects/docs.easyjitsi.com/src/css/custom.css"
        }
      }
    ]
  ]
};