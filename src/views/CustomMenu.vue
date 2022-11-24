<template>
  <Navbar />
  <div class="flex-col">
    <!-- <multiselect v-model="selected" :options="options"></multiselect> -->
    <div class="flex justify-center mx-10">
      <p class="shadow-9xl animate-charcter-history text-5xl p-4 font-black">
        What's on menu today?
      </p>
    </div>
    <div class=" flex justify-center">
      <div class=" flex-col py-20 px-24 bg-white rounded-md shadow-lg">
        <p class="text-3xl mb-5">Create you own menu</p>
        <label for="protein" class="text-xl">Protein</label>
        <input type="text" class="inputTextField" name="protein" />
        <div>
          <!-- <VueMultiselect
            v-model="data"
            :options="source"
            :multiple="true"
            :close-on-select="true"
            placeholder="Pick some"
            label="name"
            track-by="name"
            /> -->
          <!-- <VueMultiselect 
            v-model="selected"
            :options="options"/> -->
          <!-- <multiselect v-model="selected" :options="options"></multiselect> -->
        </div>
        <label for="carb" class="text-xl">Carbohydrate</label>
        <input type="text" class="inputTextField" name="carb" />
        <label for="fat" class="text-xl">Fat</label>
        <input type="text" class="inputTextField" name="fat" />
        <div class="flex justify-end">
          <input
            type="button"
            name="submit"
            id=""
            value="Submit"
            class="px-5 py-3 bg-gray-200 rounded-md scale-100 shadow-sm hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { useUserInfoStore } from '../stores/userInfo'

import Multiselect from "vue-multiselect";
export default {
  components: {
    Navbar,
    // VueMultiselect,
    Multiselect,
  },
  data() {
    return {
      //   value: [],
      //   options: [
      //     { name: 'Vue.js', language: 'JavaScript' },
      //     { name: 'Adonis', language: 'JavaScript' },
      //     { name: 'Rails', language: 'Ruby' },
      //     { name: 'Sinatra', language: 'Ruby' },
      //     { name: 'Laravel', language: 'PHP' },
      //     { name: 'Phoenix', language: 'Elixir' }
      //   ]
      selected: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>

<style>
.animate-charcter-history {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #fff 0%,
    #fff 29%,
    #00ff1e 50%,
    #fff 67%,
    #fff 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s linear infinite;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

</style>
