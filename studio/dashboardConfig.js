export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d98ce5dd64adcc57011d0bb',
                  title: 'Sanity Studio',
                  name: 'sixth-sense-retail-studio',
                  apiId: 'd1041be1-8925-4fe9-9ed7-ef16d910603b'
                },
                {
                  buildHookId: '5d98ce5ddcadce320fbaa566',
                  title: 'Blog Website',
                  name: 'sixth-sense-retail',
                  apiId: 'f91047e9-2e9a-4fd4-a630-3a16e85b5eab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isaacdpierce/sixth-sense-retail',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sixth-sense-retail.netlify.com', category: 'apps'}
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
