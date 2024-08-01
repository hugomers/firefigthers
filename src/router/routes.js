
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
      { path: 'report', component: () => import('pages/Assist/Index.vue') },
      { path: 'devices', component: () => import('pages/Assist/Devices.vue') },
      { path: 'staff', component: () => import('pages/Assist/Staff.vue') },
      { path: 'excuses', component: () => import('pages/Assist/Excuses.vue') },
    ]
  },
  {
    path: '/traspasos',
    component: () => import('layouts/TraspasosLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Traspasos/index.vue') }
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
