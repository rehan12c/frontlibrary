import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '../views/BerandaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BerandaView
    },
    {
      path: '/pengunjung',
      name: 'pengunjung',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PengunjungView.vue')
    },
    {
      path: '/buku',
      name: 'buku',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BukuView.vue')
    },
    {
      path: '/kategori',
      name: 'kategori',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KategoriView.vue')
    },
    {
      path: '/peminjaman',
      name: 'peminjaman',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Peminjaman.vue')
    },
  ]
})

export default router
