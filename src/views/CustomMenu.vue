<template>
  <Navbar />
  <div class="flex-col">
    <!-- <multiselect v-model="selected" :options="options"></multiselect> -->
    <div class="flex justify-center mx-10">
      <p class="shadow-9xl animate-charcter-history text-5xl p-4 font-black">
        Tell us what you eat?
      </p>
    </div>
    <div class=" flex justify-center">
      <div class=" flex-col py-20 px-24 bg-white rounded-md shadow-lg">
        <p class="text-3xl mb-5">Create you own menu</p>
        <div class="mb-5">
        <label for="protein" class="text-xl">Protein</label>
          <Multiselect 
          v-model="proteinSelect"
          :multiple="true"
          :options="options1"
          label="name"
          track-by="name"
          />

        </div>
        <div class="mb-5">
        <label for="carb" class="text-xl">Carbohydrate</label>
          <Multiselect 
          v-model="carbSelect"
          :multiple="true"
          :options="options2"
          label="name"
          track-by="name"
          />
        </div>
        <div class="mb-5">
        <label for="fat" class="text-xl">Fat</label>
          <Multiselect 
          v-model="fatSelect"
          :multiple="true"
          :options="options3"
          label="name"
          track-by="name"
          />
        </div>
        <div class="mb-5 text-center text-2xl">
          <p class="text-2xl">Total Calories</p> 
          <p class="text-2xl">{{ totalCalories }}</p>
        </div>
        <div class="flex justify-end">
          <button
            @click="calculate"
            class="px-5 py-3 bg-gray-200 rounded-md scale-100 shadow-sm hover:scale-105 mr-52"
           >Calculate</button>
          <button
            @click="submit"
           class="px-5 py-3 bg-gray-200 rounded-md scale-100 shadow-sm hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { useUserInfoStore } from '../stores/userInfo'
import { Multiselect } from "vue-multiselect";
import { db } from "../main.js";
import { updateDoc ,doc} from '@firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  components: {
    Navbar,
    Multiselect,
  },
  data() {
    return {
        options1: [
          {name: "Egg", calorie: 72},
          {name: "Pork", calorie: 200},
          {name: "Chicken", calorie: 100},
          {name: "Beef", calorie: 250},
        ],
        options2: [
          {name: "Rice", calorie: 150},
          {name: "Bun", calorie: 120},
          {name: "Noodle", calorie: 300},
          {name: "Flour", calorie: 365},
        ],
        options3: [
          {name: "Oil", calorie: 120},
          {name: "Butter", calorie: 102},
          {name: "Cheese", calorie: 350},

        ],
      proteinSelect: [],
      carbSelect: [],
      fatSelect: [],
      totalCalories: 0,
      trackFood: [],
      informationUser: [],
      leftCalorie: 0,
    };
  },
  async created(){
    await useUserInfoStore().fetchInformationUser();
    this.informationUser = useUserInfoStore().informationUser;
    this.trackFood = this.informationUser.trackFood;
    this.leftCalorie = this.informationUser.leftCalorie;

  },
  methods:{
    calculate(){
      this.totalCalories=0
      this.proteinSelect.forEach(food=>{
        this.totalCalories += food.calorie;
      })
      this.carbSelect.forEach(food=>{
        this.totalCalories += food.calorie;
      })
      this.fatSelect.forEach(food=>{
        this.totalCalories += food.calorie;
      })
      this.leftCalorie -= this.totalCalories
    },
   async submit(){
    console.log("submit")
    this.trackFood.push("gXaFsWy9qVaAM9nxZp6z")
    console.log("after add custom", this.trackFood)
      //update Calorie
      await updateDoc(doc(db,"foods", "gXaFsWy9qVaAM9nxZp6z"),{
        calorie: this.totalCalories,
      }); 
      //update trackFood
      const auth = getAuth();
      const user = auth.currentUser;
      console.log("log left cal", this.leftCalorie);
      await updateDoc(doc(db, "users", user.uid), {
        trackFood: this.trackFood,
        leftCalorie: this.leftCalorie,
      });
}
  }
};
</script>

<style>
.animate-charcter-history {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #fff 0%,
    #fff 29%,
    #00ff1e 50%,
    #fff 67%,
    #fff 100%
  );
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

</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>