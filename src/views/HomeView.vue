<template>

  <div>
    <Navbar />
  </div>
  <div class="flex justify-center mx-10">

    <p class=" shadow-9xl animate-charcter-history text-5xl pt-4 font-black ">
      What's on menu today?
    </p>

  </div>
  <div class="flex-col">

    <!-- <div class="flex justify-center flex-col">
      <Food @click="incrementI" class="mb-12 flex justify-center" 
        :name="foods[i].name" 
        :calorie="foods[i].calorie"
        :image="foods[i].image"
      ></Food>
    </div> -->



    <div class="text-center mt-2 scale-100 hover:scale-105 text-2xl text-white">
      <router-link to="/custom" class="hover:text-green-500">not on menu?</router-link>
    </div>
  </div>
</template>

<script>
import { useFoodStore } from "@/stores/randFood.js";
import { RecommendFood } from "@/services/recommend";
import { useLikeFoodStore } from '@/stores/likeFood'
import Navbar from "@/components/Navbar.vue";
import Food from "@/components/Food.vue";

export default {
  components: {
    Navbar,
    Food,
  },
  data() {
    return {
      foods: [],
      i: 0,
      likeFood: [],
    };
  },
  async created() {
    console.log("Home Create")
    await useFoodStore().fetchFood();
    this.foods = useFoodStore().getRandFood;
    console.log(this.foods[0].name);

    await useLikeFoodStore().fetchLikeFood();
    this.likeFood = useLikeFoodStore().getLikeFood;
    console.log("likeFood: ", this.likeFood)
  },
  async mounted(){
    console.log("home mounted")
  },
  methods: {
    incrementI() {
      this.i = this.i + 1
    },
  },
};
</script>




<style scoped>
#swiper {
  height: 70vh;
  aspect-ratio: 2 / 3;
  perspective: 1000px;
  perspective-origin: center 50%;
  transform-style: preserve-3d;
  position: relative;
}

.animate-charcter-history {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #fff 0%,
      #fff 29%,
      #00FF1E 50%,
      #fff 67%,
      #fff 100%);
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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
