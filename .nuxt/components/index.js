export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Modal } from '../..\\components\\Modal.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyModal = import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c)
