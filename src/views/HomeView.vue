<template>
  <Navbar/>
  <div class="flex-col">
  <div>
    <p class="text-white text-5xl ml-16 my-3">What's on menu today?</p>
  </div>
  <div class="flex justify-center">
    <Food/>
  </div>
  <div class="text-center mt-2 scale-100 hover:scale-105 text-2xl text-white">
    <router-link to="/custom" class="hover:text-green-500">not on menu?</router-link>
  </div>
  <div>
    <!-- <input type="submit" class="p-10 bg-red-500" :onclick="upload" > -->
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Food from "../components/Food.vue";
// import {uploadToFirebase} from "../upload.js";
export default {
  components: {
    Navbar,
    Food,
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
