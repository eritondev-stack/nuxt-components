<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Tailwind with NuxtTS</h1>
      <div class="flex flex-row">
        <div class="flex flex-row justify-center">
          <nuxt-link to="/users">
            <div
              class="bg-green-500 hover:bg-green-600 px-5 py-2 text-white w-32 text-center rounded-md cursor-pointer"
            >
              Users
            </div>
          </nuxt-link>

          <CompCapacity />
          <CompProjeto />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class IndexPage extends Vue {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
