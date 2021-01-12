export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ffdf929cf7ff61370979f6f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5xae8phy',
                  apiId: '9215b8b9-c2d4-47e0-afe4-9db6eda29a92'
                },
                {
                  buildHookId: '5ffdf92a4ebc750dec401e79',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gy4skqys',
                  apiId: '5b37f491-9d7b-4bed-ac8f-d63a9798c4ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/holu-solar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gy4skqys.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
