<template>
  <div class="grid grid-cols-12">
     <div class="col-span-6">
       <span class="btn-tom">Tom</span>
        <span class="btn-component">Tom</span>
     </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class tableCapacity extends Vue {
}
</script>

<style lang="postcss">

.btn-component {
  @apply w-64 bg-red-700 text-white m-5 p-5 flex justify-center items-center;&:hover {
  @apply bg-orange-500
}
}

</style>