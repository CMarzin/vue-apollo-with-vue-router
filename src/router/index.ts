import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { gql } from '@apollo/client/core';

import apolloClient from '../apollo'

import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/users/:id',  component: () => import('../views/UserView.vue') },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  if (to.params.id) {
      const query = await apolloClient.query({ query: gql`
      {
        user(id: ${to.params.id}) {
          id
          name
        }
      }
    `})
    userStore.setUser(query.data.user)
    next()
  } else {
    next()
  }
});

export default router
