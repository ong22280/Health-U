<template>
  <Navbar />
  <div class="flex-col">
    <div>
      <p class="text-white text-5xl ml-16 my-3">What's on menu today?</p>
    </div>

        <Food v-for="food in foods" :key="food.id" class="mb-12 flex justify-center" :name="food.name" :calorie="food.calorie"
          :image="food.image">
        </Food>

    <div class="text-center mt-2 scale-100 hover:scale-105 text-2xl text-white">
      <router-link to="/custom" class="hover:text-green-500">not on menu?</router-link>
    </div>
    <div>
      <!-- <input type="submit" class="p-10 bg-red-500" :onclick="upload" > -->
    </div>
  </div>
</template>

<script>
import { useFoodStore } from "../stores/randFood.js";
import Navbar from "../components/Navbar.vue";
import Food from "../components/Food.vue";
// import {uploadToFirebase} from "../upload.js";
export default {
  components: {
    Navbar,
    Food,
  },
  data() {
    return {
      foods: [],
      count: 0,
    };
  },
  async mounted() {
    await useFoodStore().fetchFood();
    this.foods = useFoodStore().getRandFood;
    console.log(this.foods[1].name);
  },
  // methods: {
  //   async upload(){
  //     await uploadToFirebase()
  //   }
  // }
};
</script>

<style scoped>
.title {
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}
</style>
