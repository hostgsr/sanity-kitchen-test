export default {
  widgets: [
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
                  buildHookId: '63186325e6f7d21861d37882',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-test-studio',
                  apiId: '701d629f-9313-4a7d-97a5-d5de1ffc035c'
                },
                {
                  buildHookId: '63186325676a7e18ff9572fa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-test',
                  apiId: 'a7eb3521-a159-448f-a228-1ff0c6a4ff68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hostgsr/sanity-kitchen-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
