import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/main.js";
import { useUserInfoStore } from "./userInfo.js";

await useUserInfoStore().fetchInformationUser();
const informationUser = useUserInfoStore().informationUser;
console.log("show like food in likeFood",informationUser.likeFoods);

const foodList = informationUser.likeFoods;

export const useLikeFoodStore = defineStore("foods", {
  state: () => ({
    likeFood: [],
  }),
  getters: {
    getLikeFood: (state) => {
      return state.likeFood;
    },
  },
  actions: {
    async fetchLikeFood() {
      console.log("in likeFood")
      console.log('foodList', foodList)
      this.likeFood = [];
      const queryData = query(collection(db, "foods"));
      const querySnapshot = await getDocs(queryData);
      querySnapshot.forEach((doc) => {
        if (foodList.includes(doc.id)) {
            console.log(doc.data())
            this.likeFood.push(doc.data());
        }
      });
    },
  },
});
