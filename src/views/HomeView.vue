<template>
  <Navbar/>
  <div class="flex-col">
  <div>
    <p class="text-white text-4xl ml-20 p-9">What's on menu today?</p>
  </div>
  <div class="flex justify-center">
    <Food/>
  </div>
  <div class="text-center mt-2">
    <router-link to="/custom" class="text-white text-2xl">not on menu?</router-link>
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Food from "../components/Food.vue";
export default {
  components: {
    Navbar,
    Food,
  },
};

</script>

<style scoped>
.title {
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}
</style>
