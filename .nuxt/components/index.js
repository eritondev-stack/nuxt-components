export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Modal } from '../..\\components\\Modal.vue'
export { default as CapacityCompCapacity } from '../..\\components\\capacity\\CompCapacity.vue'
export { default as ProjetosCompProjeto } from '../..\\components\\projetos\\CompProjeto.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyModal = import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c)
export const LazyCapacityCompCapacity = import('../..\\components\\capacity\\CompCapacity.vue' /* webpackChunkName: "components/capacity-comp-capacity" */).then(c => c.default || c)
export const LazyProjetosCompProjeto = import('../..\\components\\projetos\\CompProjeto.vue' /* webpackChunkName: "components/projetos-comp-projeto" */).then(c => c.default || c)
