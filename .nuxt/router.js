import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49e13315 = () => interopDefault(import('..\\pages\\capacity.vue' /* webpackChunkName: "pages/capacity" */))
const _1cdd7da2 = () => interopDefault(import('..\\pages\\outher.vue' /* webpackChunkName: "pages/outher" */))
const _5eb7302c = () => interopDefault(import('..\\pages\\page.vue' /* webpackChunkName: "pages/page" */))
const _272212bd = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _fa84b1fa = () => interopDefault(import('..\\pages\\vuetify.vue' /* webpackChunkName: "pages/vuetify" */))
const _4e1130f4 = () => interopDefault(import('..\\pages\\vuetifyy.vue' /* webpackChunkName: "pages/vuetifyy" */))
const _3c8f8ef2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

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
    path: "/vuetify",
    component: _fa84b1fa,
    name: "vuetify"
  }, {
    path: "/vuetifyy",
    component: _4e1130f4,
    name: "vuetifyy"
  }, {
    path: "/",
    component: _3c8f8ef2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
