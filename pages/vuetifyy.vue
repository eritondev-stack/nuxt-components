<template>
  <v-app>
    <div data-app class="grid grid-cols-12 gap-1 p-5 h-screen">
      <div class="col-span-6">
        <div class="w-64">
          <div>Plataformas</div>

          <v-select color="eriton" v-model="value" :items="items" multiple solo>
            <template v-slot:selection="{ item, index }">
              <span v-if="index === 0">{{ item }}</span>

              <span v-if="index === 1"> (+{{ value.length - 1 }} outros) </span>
            </template>
          </v-select>
        </div>
      </div>
      <div class="col-spam-6">
       <div class="w-64"> <v-alert type="success">Sucesso, agora sim consegui adicionar</v-alert></div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, namespace, Watch } from "nuxt-property-decorator";

@Component({
  name: "OpaCompo",
})
export default class Moutains extends Vue {
  items = ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"];
  value = ["foo", "bar", "fizz"];

  @Watch("value")
  changeValue() {
    console.log(this.value);
  }
}
</script>
<style lang="postcss">
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: rgb(255, 4, 247) !important;
  border: 1px solid red !important;
  box-shadow: none !important;
  min-height: 3px !important;
  max-height: 30px !important;
}
.v-btn:before {
  opacity: 0 !important;
}

.v-ripple__container {
  opacity: 0 !important;
}

</style>
