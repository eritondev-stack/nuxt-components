<template>
  <div class="h-full w-full flex items-center justify-center">
    <transition name="fade">
      <div v-show="show_modal" class="fixed inset-0 z-30">
        <!--       background -->
        <main
          class="flex flex-col items-center justify-center h-full w-full bg-nuxt-trans"
        >
          <transition
            enter-active-class="animate__animated animate__zoomIn animate__faster"
            leave-active-class="animate__animated animate__zoomOut animate__faster"
          >
            <!--        name="fade-up-down"-->
            <div v-show="show_modal" class="flex items-center z-30">
              <div
                class="max-w-md mx-auto xl:max-w-modal-max lg:max-w-6xl md:max-w-2xl bg-white xl:bg-teal-600 lg:bg-orange-500 md:bg-pink-600 max-h-screen shadow-lg transition duration-500 ease-in-out"
              >
                <div class="p-5 bg-gray-900 text-gray-900 rounded-t">
                  <h5 class="text-white text-2xl uppercase">this is header</h5>
                </div>
                <div class="modal-body p-5 w-full h-full overflow-y-auto">
                  <p class="text-justify">
                    cilis omnis nam illum maiores, porro velit deserunt neque.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse, voluptates eveniet labore dolorum molestiae, modi
                    saepe fugiat minima repudiandae repellendus obcaecati
                    voluptatibus ab tenetur recusandae eius quos at maiores
                    atque consectetur facilis! Nisi fuga cilis omnis nam illum
                    maiores, porro velit deserunt neque. Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Esse, voluptates eveniet
                    labore dolorum molestiae, modi saepe fugiat minima
                    repudiandae repellendus obcaecati voluptatibus ab tenetur
                    recusandae eius quos at maiores atque consectetur facilis!
                    Nisi fuga cilis omnis nam illum maiores, porro velit
                    deserunt neque. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Esse, voluptates eveniet labore dolorum
                    molestiae, modi saepe fugiat minima repudiandae repellendus
                    obcaecati voluptatibus ab tenetur recusandae eius quos at
                    maiores atque consectetur facilis! Nisi fuga cilis omnis nam
                    illum maiores, porro velit deserunt neque. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Esse,
                    voluptates eveniet labore dolorum molestiae, modi saepe
                    fugiat minima repudiandae repellendus obcaecati voluptatibus
                    ab tenetur recusandae eius quos at maiores atque consectetur
                    facilis! Nisi fuga cilis omnis nam illum maiores, porro
                    velit deserunt neque. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Esse, voluptates eveniet
                    labore dolorum molestiae, modi saepe fugiat minima
                    repudiandae repellendus obcaecati voluptatibus ab tenetur
                    recusandae eius quos at maiores atque consectetur facilis!
                    Nisi fuga cilis omnis nam illum maiores, porro velit
                    deserunt neque. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Esse, voluptates eveniet labore dolorum
                    molestiae, modi saepe fugiat minima repudiandae repellendus
                    obcaecati voluptatibus ab tenetur recusandae eius quos at
                    maiores atque consectetur facilis! Nisi fuga cilis omnis nam
                    illum maiores, porro velit deserunt neque. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Esse,
                    voluptates eveniet labore dolorum molestiae, modi saepe
                    fugiat minima repudiandae repellendus obcaecati voluptatibus
                    ab tenetur recusandae eius quos at maiores atque consectetur
                    facilis! Nisi fuga cilis omnis nam illum maiores, porro
                    velit deserunt neque. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Esse, voluptates eveniet
                    labore dolorum molestiae, modi saepe fugiat minima
                    repudiandae repellendus obcaecati voluptatibus ab tenetur
                    recusandae eius quos at maiores atque consectetur facilis!
                    Nisi fuga cilis omnis nam illum maiores, porro velit
                    deserunt neque. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Esse, voluptates eveniet labore dolorum
                    molestiae, modi saepe fugiat minima repudiandae repellendus
                    obcaecati voluptatibus ab tenetur recusandae eius quos at
                    maiores atque consectetur facilis! Nisi fuga cilis omnis nam
                    illum maiores, porro velit deserunt neque. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Esse,
                    voluptates eveniet labore dolorum molestiae, modi saepe
                    fugiat minima repudiandae repellendus obcaecati voluptatibus
                    ab tenetur recusandae eius quos at maiores atque consectetur
                    facilis! Nisi fuga cilis omnis nam illum maiores, porro
                    velit deserunt neque. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Esse, voluptates eveniet
                    labore dolorum molestiae, modi saepe fugiat minima
                    repudiandae repellendus obcaecati voluptatibus ab tenetur
                    recusandae eius quos at maiores atque consectetur facilis!
                    Nisi fuga cilis omnis nam illum maiores, porro velit
                    deserunt neque. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Esse, voluptates eveniet labore dolorum
                    molestiae, modi saepe fugiat minima repudiandae repellendus
                    obcaecati voluptatibus ab tenetur recusandae eius quos at
                    maiores atque consectetur facilis! Nisi fuga cilis omnis nam
                    illum maiores, porro velit deserunt neque. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Esse,
                    voluptates eveniet labore dolorum molestiae, modi saepe
                    fugiat minima repudiandae repellendus obcaecati voluptatibus
                    ab tenetur recusandae eius quos at maiores atque consectetur
                    facilis! Nisi fuga cilis omnis nam illum maiores, porro
                    velit deserunt neque. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Esse, voluptates eveniet
                    labore dolorum molestiae, modi saepe fugiat minima
                    repudiandae repellendus obcaecati voluptatibus ab tenetur
                    recusandae eius quos at maiores atque consectetur facilis!
                    Nisi fuga
                  </p>
                </div>
                <div
                  class="py-3 px-5 border0-t text-right flex flex-row justify-end"
                >
                  <div
                    @click="show_modal = !show_modal"
                    class="bg-green-500 hover:bg-green-600 px-5 py-2 text-white w-32 text-center rounded-md cursor-pointer"
                  >
                    OK
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </main>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
@Component
export default class Modal extends Vue {
  @Prop({ default: false }) show!: boolean;

  private show_modal = false;

  @Watch("show")
  newValue() {
    this.showModal();
  }
  showModal() {
    if (this.show_modal) {
      //stop screen scrolling
      // document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden');
      this.show_modal = false;
    } else {
      // document.getElementsByTagName("html")[0].classList.add('overflow-y-hidden');
      this.show_modal = true;
    }
  }
}
</script>

<style scoped>
.modal-body {
  max-height: 500px;
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