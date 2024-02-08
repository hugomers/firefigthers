
const routes = [
  {
    path: '/formcli',
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
  ,
  {
    path: '/Abonos',
    component: () => import('layouts/AbonosLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Abonos/Index.vue') }
    ]
  },

  {
    path: '/assist',
    component: () => import('layouts/AsistenciasLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Assist/Index.vue') }
    ]
  },
  {
    path: '/traspasos',
    component: () => import('layouts/TraspasosLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Traspasos/index.vue') }
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
