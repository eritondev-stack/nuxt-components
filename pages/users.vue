<template>
  <div class="grid grid-cols-12 gap-1 p-5">
    <div class="col-span-6">
      <h1 class="text-3xl text-indigo-600 animate__animated animate__bounce animate__infinite	infinite">Users API</h1>
      <div>
        <Draggable :list="users">
          <div v-for="value of users" :key="value.first_name">
            <div
              class="flex flex-row justify-start items-center mt-3 bg-gray-200 hover:bg-gray-300 p-2 w-64 rounded-md shadow-lg cursor-pointer select-none"
            >
              <div>
                <img
                  class="w-12 h-12 rounded-full"
                  :src="value.avatar"
                  alt=""
                />
              </div>
              <div>
                <div class="ml-2 text-purple-800 font-bold">
                  {{ value.first_name }}
                </div>
                <div class="ml-2 text-gray-600 text-sm">{{ value.email }}</div>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
      <NuxtLink to="outher" class="bg-indigo-500 text-white p-3 m-4"
        >Outher</NuxtLink
      >
      <button @click="add()" class="bg-green-500 text-white p-3 m-4">
        Add
      </button>
    </div>
    <div class="col-spna-6"></div>
  </div>
</template>

<script lang="ts">
import Draggable from "vuedraggable";
import { Vue, Component, namespace } from "nuxt-property-decorator";
const counter = namespace("counter");
import request from "@/services/requests";
import { Context } from "@nuxt/types";

@Component({
  components: {
    Draggable
  }
})
export default class Moutains extends Vue {
  private id = 0;
  private users: any

  @counter.Mutation
  private incUsers!: (users: any[]) => void;

  @counter.Mutation
  private incUsersOne!: (users: any) => void;

  async asyncData(context: Context) {
    const users = await request.getUsers();
    context.store.commit('counter/incUsers', users)
    return { users };
  }

  add() {
    this.incUsersOne({ first_name: "Eriton-" + String(this.id++) });
  }
}
</script>
