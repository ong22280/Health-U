<template>
    <Navbar/>
 <div class="flex-col">
    <div class="text-white text-5xl ml-16 my-3">Tell us what you ate ?</div>
    <div class="flex justify-center">
        <div class="flex-col py-20 px-24 bg-white rounded-md shadow-lg">
            <p class="text-3xl mb-5">Create you own menu</p>
            <label for="protein" class="text-xl">Protein</label>
            <input 
            type="text" 
            class="block bg-gray-100 rounded-md text-lg mb-5 py-3 px-5 shadow-sm"
            name="protein"
            />
            <label for="carb" class="text-xl">Carbohydrate</label>
            <input type="text" 
            class="block bg-gray-100 rounded-md text-lg mb-5 py-3 px-5 shadow-sm"
            name="carb"
            />
            <label for="fat" class="text-xl">Fat</label>
            <input type="text" 
            class="block bg-gray-100 rounded-md text-lg mb-5 py-3 px-5 shadow-sm"
            name="fat"
            />
            <div class="flex justify-end">
            <input 
            type="button" 
            name="submit" 
            id=""
            value="Submit"
            class="px-5 py-3 bg-gray-200 rounded-md scale-100 shadow-sm hover:scale-105"/>
            </div>
        </div>
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