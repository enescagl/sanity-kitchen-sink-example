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
                  buildHookId: '60317989cb9bece5a8cb9dfb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-example-studio-pxzzr4ha',
                  apiId: 'bf41535d-a87d-4860-a060-3f7cceaa6957'
                },
                {
                  buildHookId: '60317989ee9649061690ae2a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-example-web',
                  apiId: 'fd65be12-7073-42b2-92d3-ab49c8af8e1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enescagl/sanity-kitchen-sink-example',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-example-web.netlify.app', category: 'apps'}
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
