
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Clientes/Index.vue') },

    ]
  },
  {
    path: '/solicitudes',
    component: () => import('layouts/QuotesLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Clientes/History.vue') },
    ]
  },
  {
    path: '/salidas',
    component: () => import('layouts/SalidasLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Salidas/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
