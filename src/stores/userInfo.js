import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../main.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useUserInfoStore = defineStore("users", {
  state: () => ({
    informationUser: [],
    trackFood: [],
    likeFood: [],
    allergic: [],
  }),
  getters: {
    getInformationUser: (state) => {
      return state.informationUser;
    }
  },
  actions: {
    async fetchInformationUser() {
      const auth = getAuth();
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.id === auth.currentUser.uid) {
          this.informationUser = doc.data();
          this.trackFood = doc.data().trackFood;
          this.likeFood = doc.data().likeFood;
          this.allergic = doc.data().likeFood;
        }
      });
    },
  },
});
