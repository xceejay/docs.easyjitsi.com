
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world'),
  exact: true,
  
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/architecture',
  component: ComponentCreator('/docs/architecture'),
  exact: true,
  
},
{
  path: '/docs/benchmarks',
  component: ComponentCreator('/docs/benchmarks'),
  exact: true,
  
},
{
  path: '/docs/config',
  component: ComponentCreator('/docs/config'),
  exact: true,
  
},
{
  path: '/docs/docker',
  component: ComponentCreator('/docs/docker'),
  exact: true,
  
},
{
  path: '/docs/extensions',
  component: ComponentCreator('/docs/extensions'),
  exact: true,
  
},
{
  path: '/docs/gettingstarted',
  component: ComponentCreator('/docs/gettingstarted'),
  exact: true,
  
},
{
  path: '/docs/gettingstartedjibri',
  component: ComponentCreator('/docs/gettingstartedjibri'),
  exact: true,
  
},
{
  path: '/docs/help',
  component: ComponentCreator('/docs/help'),
  exact: true,
  
},
{
  path: '/docs/iframeapi',
  component: ComponentCreator('/docs/iframeapi'),
  exact: true,
  
},
{
  path: '/docs/installation',
  component: ComponentCreator('/docs/installation'),
  exact: true,
  
},
{
  path: '/docs/installingdep',
  component: ComponentCreator('/docs/installingdep'),
  exact: true,
  
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro'),
  exact: true,
  
},
{
  path: '/docs/introtojitsi',
  component: ComponentCreator('/docs/introtojitsi'),
  exact: true,
  
},
{
  path: '/docs/jibri',
  component: ComponentCreator('/docs/jibri'),
  exact: true,
  
},
{
  path: '/docs/jitsireact',
  component: ComponentCreator('/docs/jitsireact'),
  exact: true,
  
},
{
  path: '/docs/jitsiui',
  component: ComponentCreator('/docs/jitsiui'),
  exact: true,
  
},
{
  path: '/docs/loadbalancing',
  component: ComponentCreator('/docs/loadbalancing'),
  exact: true,
  
},
{
  path: '/docs/quickstart',
  component: ComponentCreator('/docs/quickstart'),
  exact: true,
  
},
{
  path: '/docs/scaling',
  component: ComponentCreator('/docs/scaling'),
  exact: true,
  
},
{
  path: '/docs/securedomain',
  component: ComponentCreator('/docs/securedomain'),
  exact: true,
  
},
{
  path: '/docs/tips',
  component: ComponentCreator('/docs/tips'),
  exact: true,
  
},
{
  path: '/docs/welcome',
  component: ComponentCreator('/docs/welcome'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
