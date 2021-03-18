import Vue from 'vue'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Modal: () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c),
  CapacityCompCapacity: () => import('../..\\components\\capacity\\CompCapacity.vue' /* webpackChunkName: "components/capacity-comp-capacity" */).then(c => c.default || c),
  ProjetosCompProjeto: () => import('../..\\components\\projetos\\CompProjeto.vue' /* webpackChunkName: "components/projetos-comp-projeto" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
