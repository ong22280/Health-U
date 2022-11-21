<template>
    <Navbar/>
 <div class="flex-col ">
    <div class="text-white">Hello</div>
    <div>
        <router-link to="/home" class="text-white text-5xl">back to home</router-link>
    </div>
 </div> 
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
    components:{
    Navbar,
    }
}
</script>

<style>

</style>