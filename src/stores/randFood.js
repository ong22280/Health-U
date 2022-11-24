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
      console.log("in randfood")
      const q = query(collection(db, "foods"));
      const querySnapshot = await getDocs(q);
      const queryData = querySnapshot.docs.map((doc) => doc.data());
      // console.log(queryData);
      queryData.forEach((doc) => {
        console.log("show doc", doc)
        if( !(doc.foodID==="gXaFsWy9qVaAM9nxZp6z"))
        this.foods.push(doc);
      });
      // sort by like
      this.foods.sort((a, b) => {
        return b.like - a.like;
      });
      console.log(this.foods[0].name);
    },
  },
});
