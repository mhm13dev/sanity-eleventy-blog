export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '600454deb454fc283b585762',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7x6vs24d',
                  apiId: 'd9438972-0996-4ba7-bae1-6929c5f747bc'
                },
                {
                  buildHookId: '600454defc21bd4aeea1a72f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1g513tyj',
                  apiId: '8a8d0818-4704-43b7-b136-838801051c19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhm13dev/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1g513tyj.netlify.app', category: 'apps'}
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
