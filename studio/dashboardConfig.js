export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d09f34ec18cff8375993cc1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-69486foe',
                  apiId: 'bc1d19de-00b0-42cb-ad80-032d9645d292'
                },
                {
                  buildHookId: '5d09f34e45ea0d3a77437f86',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-a85odxrk',
                  apiId: '6cdd2c76-d815-4e26-a467-bc7692353340'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/madflanderz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-a85odxrk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
