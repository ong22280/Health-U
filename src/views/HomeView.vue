<template>
  <Navbar/>
  <div class="flex-col">
  <div>
    <p class="text-white text-3xl ml-10">What's on menu today?</p>
  </div>
  <div class="p-52 bg-white">
  <p class="text-white">Hello Hello</p>
  </div>
  <div>
    <p class="text-white">not on menu??</p>
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
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
