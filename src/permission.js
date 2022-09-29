import router from '@/router'
import store from '@/store'
const url = ['/404', '/login']
router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (url.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})
