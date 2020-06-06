
const routes = [
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'profile',
        component: () => import('pages/profile/Profile.vue'),
        children: [
          {
            name: 'profile',
            path: '/',
            component: () => import('pages/profile/User.vue'),
            children: [
              {
                name: 'profile.active',
                path: '/',
                component: () => import('pages/profile/Active.vue')
              },
              {
                name: 'profile.archive',
                path: 'archive',
                component: () => import('pages/profile/Archive.vue')
              }
            ]
          },
          {
            name: 'reply',
            path: 'reply',
            component: () => import('pages/reply/Reply.vue'),
            children: [
              {
                name: 'reply.active',
                path: '/',
                component: () => import('pages/reply/Active.vue')
              },
              {
                name: 'reply.archive',
                path: 'archive',
                component: () => import('pages/reply/Archive.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'news',
        component: () => import('pages/News.vue')
      },
      {
        path: 'initiative',
        component: () => import('pages/Initiative.vue'),
        children: [
          {
            name: 'initiative.current',
            path: '/'
            // component: () => import('pages/reply/Active.vue')
          },
          {
            name: 'initiative.archive',
            path: 'archive'
            // component: () => import('pages/reply/Archive.vue')
          }
        ]
      },
      {
        path: 'blog',
        component: () => import('pages/Blog.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
