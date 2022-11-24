import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/main.js";
import { useUserInfoStore } from "./userInfo.js";

await useUserInfoStore().fetchInformationUser();
const informationUser = useUserInfoStore().informationUser;
console.log(informationUser);
const foodList = informationUser.trackFood;
console.log(foodList);

export const trackFoodStore = defineStore("foods", {
  state: () => ({
    trackFood: [],
  }),
  getters: {
    getTrackFood: (state) => {
      return state.trackFood;
    },
  },
  actions: {
    async fetchTrackFood() {
      console.log('foodList', foodList)
      this.trackFood = [];
      const queryData = query(collection(db, "foods"));
      const querySnapshot = await getDocs(queryData);
      querySnapshot.forEach((doc) => {
        if (foodList.includes(doc.id)) {
          this.trackFood.push(doc.data());
        }
      });
    },
  },
});
