import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../main.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserInfoStore } from "./userInfo.js";

await useUserInfoStore().fetchInformationUser();
const informationUser = useUserInfoStore().informationUser;
const allergic = informationUser.allergic;

export const useFoodStore = defineStore("foods", {
  state: () => ({
    foods: [],
  }),
  getters: {
    getRandFood: (state) => {
      return state.foods;
    },
  },
  actions: {
    async fetchFood() {
      const q = query(collection(db, "foods"));
      const querySnapshot = await getDocs(q);
      const queryData = querySnapshot.docs.map((doc) => doc.data());
      // console.log(queryData);
      queryData.forEach((doc) => {
        if (!allergic.includes(doc.name)) {
          this.foods.push(doc);
        }
      });
      // console.log(this.foods[0].name);
    },
  },
});
