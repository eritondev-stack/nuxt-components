<template>
  <div class="grid grid-cols-12 p-5">
    <div class="col-span-6">
      <h1 class="text-nuxt-azul">Aqui é o teste do tailwind Css</h1>
      <div>e-mails {{ wheels }}</div>
      <div
        class="bg-green-500 hover:bg-green-600 px-5 py-2 text-white w-32 text-center rounded-md cursor-pointer"
        @click="add()"
      >
        Add
      </div>
    </div>

    <div class="col-span-6">
      <NuxtLink
        to="users"
        class="bg-green-500 hover:bg-green-600 px-5 py-2 text-white w-32 text-center rounded-md cursor-pointer"
        >Users</NuxtLink
      >

      <div
        @click="show_modal = !show_modal"
        class="bg-green-500 hover:bg-green-600 px-5 py-2 text-white w-32 text-center rounded-md cursor-pointer mt-2"
      >
        Modal
      </div>
    </div>
    <Modal :show="show_modal" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";
const counter = namespace("counter");

@Component
export default class Emails extends Vue {
  @counter.State
  private wheels!: number;

  private show_modal = false;

  @counter.Mutation
  private incrWheels!: (n: number) => void;

  head() {
    return {
      title: "emails",
    };
  }

  add() {
    this.incrWheels(1);
  }
}
</script>

<style scoped>
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}

/* animation for vue transition tag */

.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>