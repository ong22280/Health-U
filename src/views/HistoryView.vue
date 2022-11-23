<template>
  <div>
    <Navbar />
  </div>

  <p class="flex justify-center shadow-9xl animate-charcter-history text-5xl pt-4 font-black ">
    Your track
  </p>

  <div class="flex-col justify-center">
    <div v-for="food in trackFoods" :key="food.id" class="mb-12 flex justify-center">
      <div class=" container  shadow-2xl rounded-xl fade-in" id="content-history" style="width: 48rem; max-width: 80%;">
        <img :src="food.image" class="card-img-top rounded-xl shadow-2xl w-full">
        <div class="">
          <h5 class="card-title font-black text-3xl">{{ food.name }}</h5>
          <span class="font-bold text-2xl">calorie : </span>
          <span class="font-semibold text-2xl">{{ food.calorie }}</span>
        </div>
      </div>
    </div>
  </div>

</template>
  
<script>
import { trackFoodStore } from '../stores/trackFood.js';
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  data() {
    return {
      trackFoods: [],
    };
  },
  async mounted() {
    await trackFoodStore().fetchTrackFood();
    this.trackFoods = trackFoodStore().getTrackFood;
  },
};
</script>

<style scoped>
#content-history {
  position: relative;
  top: 40px;
  border: 1px solid lightgray;
  padding: 3rem 2rem;
  background: #fefefe;
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