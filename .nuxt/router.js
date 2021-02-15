import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49e13315 = () => interopDefault(import('..\\pages\\capacity.vue' /* webpackChunkName: "pages/capacity" */))
const _1cdd7da2 = () => interopDefault(import('..\\pages\\outher.vue' /* webpackChunkName: "pages/outher" */))
const _5eb7302c = () => interopDefault(import('..\\pages\\page.vue' /* webpackChunkName: "pages/page" */))
const _272212bd = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _3c8f8ef2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/capacity",
    component: _49e13315,
    name: "capacity"
  }, {
    path: "/outher",
    component: _1cdd7da2,
    name: "outher"
  }, {
    path: "/page",
    component: _5eb7302c,
    name: "page"
  }, {
    path: "/users",
    component: _272212bd,
    name: "users"
  }, {
    path: "/",
    component: _3c8f8ef2,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
