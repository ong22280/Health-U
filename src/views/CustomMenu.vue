<template>
    <Navbar/>
 <div class="flex-col">
    <!-- <multiselect v-model="selected" :options="options"></multiselect> -->
    <div class="text-white text-5xl ml-16 my-3">Tell us what you ate ?</div>
    <div class="flex justify-center">
        <div class="flex-col py-20 px-24 bg-white rounded-md shadow-lg">
            <p class="text-3xl mb-5">Create you own menu</p>
            <label for="protein" class="text-xl">Protein</label>
            <input 
            type="text" 
            class="inputTextField"
            name="protein"
            />
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
            <Multiselect :options="options"/>
            </div>
            <label for="carb" class="text-xl">Carbohydrate</label>
            <input type="text" 
            class="inputTextField"
            name="carb"
            />
            <label for="fat" class="text-xl">Fat</label>
            <input type="text" 
            class="inputTextField"
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
import Multiselect from 'vue-multiselect'

export default {
    components:{
    Navbar,
    // VueMultiselect,
    Multiselect
    },
    data () {
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
      options: ['list', 'of', 'options']

    }
    
}
}
</script>

<style>

</style>