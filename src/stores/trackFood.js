import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../main.js";
import { useUserInfoStore } from "./userInfo.js";

await useUserInfoStore().fetchInformationUser();
const informationUser = useUserInfoStore().informationUser;
const trackFoods = informationUser.trackFood;

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
      this.trackFood = [];
      const queryData = query(collection(db, "foods"));
      const querySnapshot = await getDocs(queryData);
      querySnapshot.forEach((doc) => {
        if (trackFoods.includes(doc.id)) {
          this.trackFood.push(doc.data());
        }
      });
    },
  },
});