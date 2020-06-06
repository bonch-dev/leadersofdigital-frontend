
const routes = [
  {
    path: '/',
    component: () => import('layouts/ClearLayout.vue'),
    children: [
      {
        path: '',
        name: 'start',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/ClearLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/Login.vue')
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import('pages/Profile/User.vue')
      },
      {
        path: 'active',
        name: 'profile.active',
        component: () => import('pages/Profile/Active')
      },
      {
        path: 'archive',
        name: 'profile.archive',
        component: () => import('pages/Profile/Archive.vue')
      }
    ]
  },
  {
    path: '/reply',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'reply',
        component: () => import('pages/Reply/Reply.vue')
      },
      {
        path: 'active',
        name: 'reply.active',
        component: () => import('pages/Reply/Active.vue')
      },
      {
        path: 'archive',
        name: 'reply.archive',
        component: () => import('pages/Reply/Archive.vue')
      }
    ]
  },
  {
    path: '/news',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'news',
        component: () => import('pages/News.vue')
      }
    ]
  },
  {
    path: '/initiative',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'initiative',
        component: () => import('pages/Initiative.vue')
      }
    ]
  },
  {
    path: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'blog',
        component: () => import('pages/Blog.vue')
      },
      {
        path: ':id',
        name: 'blog.article',
        component: () => import('pages/BlogArticle.vue')
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
