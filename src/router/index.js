import { createMemoryHistory, createRouter } from 'vue-router'

import StoreView from '../views/Store.vue'

const routes = [
  { path: '/', component: StoreView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router