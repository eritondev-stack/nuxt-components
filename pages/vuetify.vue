<template>
  <v-app>
    <div data-app class="grid grid-cols-12 gap-1 p-5 h-screen">
      <div class="col-span-6">
        <v-card color="grey lighten-5" class="p-3 my-5">
          <div class="text-3xl primary--text mb-3">Tooltips</div>
          <v-tooltip bottom color="primary">
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on" class="mt-2">Desenvolvedor</span>
            </template>
            <div>
              <div>VueJs</div>
              <div>Javascript</div>
              <div>Java</div>
            </div>
          </v-tooltip>
          <v-menu content-class="elevation-2" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div class="mt-2 w-64" v-bind="attrs" v-on="on">
                Dropdown
              </div>
            </template>
            <div class="bg-gray-300">
              <div class="cursor-pointer">Opção 1</div>
              <div class="cursor-pointer">Opção 2</div>
            </div>
          </v-menu>
  
    
        </v-card>
        <v-card color="grey lighten-5" class="p-3">
          <div class="text-3xl primary--text mb-3">Formulario</div>
          <div class="w-64">
            <div>Plataformas</div>

            <v-select
              item-color="sec"
              v-model="value"
              :items="items"
              multiple
              solo
            >
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>

                <span style="color: #93329e" v-if="index === 1"
                  ><span class="ml-2"
                    >+{{ value.length - 1 }} outros</span
                  ></span
                >
              </template>
            </v-select>
          </div>
          <div class="w-64">
            <div>Nome</div>

            <v-select
              color="sec"
              item-color="sec"
              v-model="nome"
              :items="['Eriton', 'Lucas', 'Marcos', 'Marcelo']"
              solo
            >
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>

                <span style="color: #93329e" v-if="index === 1"
                  ><span class="ml-2"
                    >+{{ value.length - 1 }} outros</span
                  ></span
                >
              </template>
            </v-select>
          </div>
        </v-card>
        <v-card color="grey lighten-5" class="p-3 mt-5">
          <div class="text-3xl primary--text mb-3">Buttons</div>
          <v-btn  class="mt-2 red--text" elevation="0" small color="normal">Cancelar</v-btn>

          <v-btn class="mt-2" elevation="0" small color="primary">Salvar</v-btn>

          <v-btn class="mt-2" elevation="0" dark height="27" small color="pri"
            >Custom</v-btn
          >
          <v-btn
            small
            color="yellow accent-1"
            class="mt-2 red--text text--lighten-1"
            @click="loader = 'loading3'"
          >
            Upload
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>

          <v-btn
            small
            color="yellow accent-2"
            class="mt-2 red--text text--lighten-2"
            @click="loader = 'loading3'"
          >
            Upload
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-card>
      </div>
      <div class="col-spam-6">
        <div class="w-64">
          <v-alert type="green accent-2"
            >Sucesso, agora sim consegui adicionar</v-alert
          >
        </div>
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
  nome = "Eriton";

  @Watch("value")
  changeValue() {
    console.log(this.value);
  }
}
</script>
<style lang="postcss">
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: rgb(255, 254, 254) !important;
  border: 1px solid rgb(204, 203, 203) !important;
  box-shadow: none !important;
  min-height: 3px !important;
  max-height: 30px !important;
}
/* .v-btn:before {
  opacity: 0 !important;
}
 */
.v-ripple__container {
  opacity: 0 !important;
}

</style>
