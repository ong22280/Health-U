<template>
  <div>
    <Navbar />
    <div class="flex flex-wrap m-9">
      <p class="title shadow-2xl">food</p>
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
