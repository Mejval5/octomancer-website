// Imports
import Vue from 'vue'
import Router from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to.path === from.path && to.name !== from.name) {
      return goTo(to.hash, { easing: 'easeInOutQuad', duration: 1500 })
    }
    return new Promise(resolve => this.app.$once('scrollAfterEnter', () => {
        if (savedPosition) {
            return resolve(savedPosition)
        }
        if (to.hash) {
          return goTo(to.hash, { easing: 'easeInOutQuad', duration: 1500 })
        }

        return resolve({ x: 0, y: 0 })
    }))
},
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '/',
          name: 'Octomancer',
          meta: { pageName: 'mainMenu' },
          component: () => import('@/views/octomancer/IndexMilan.vue'),
        },
        {
          path: '/octomancer',
          name: 'Octomancer page',
          meta: { pageName: 'octomancerPage' },
          component: () => import('@/views/octomancer/IndexMilan.vue'),
        },
        {
          path: '/brotagonists',
          name: 'Brotagonists',
          meta: { pageName: 'brotagonistsPage' },
          component: () => import('@/views/octomancer/IndexMilan.vue'),
        },
        {
          path: '/supportUs',
          name: 'Support Us',
          meta: { pageName: 'supportUsPage' },
          component: () => import('@/views/octomancer/IndexMilan.vue'),
        },
        {
          path: '/contact',
          name: 'Contact',
          meta: { pageName: 'contactPage' },
          component: () => import('@/views/octomancer/IndexMilan.vue'),
        },
        {
          path: '*',
          redirect: '/',
        },
      ],
    },
  ],
})

export default router
