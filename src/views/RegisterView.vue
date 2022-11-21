<template>
  <div class="container shadow-2xl fade-in" id="content" style="width: 500px">
    <div class="text-center">
      <p class="animate-charcter text-4xl pb-4 font-serif font-black">
        HEALTH-U
      </p>
    </div>
    <form @submit.prevent="register">
      <h2 class="mb-3 text-3xl text-center">Register</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>
      <div class="input">
        <label for="bio">IBM</label>
        <input
          class="form-control"
          type="text"
          name="bio"
          placeholder="your IBM"
        />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../main.js";
import {
  addDoc,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
      bio: "",
    };
  },
  methods: {
    moveToLogin() {
      this.$router.push("/");
    },
    async register() {
      const auth = getAuth();
      const email = document.querySelector("input[name=email]").value;
      const password = document.querySelector("input[name=password]").value;
      const bio = document.querySelector("input[name=bio]").value;
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const docRef = await addDoc(collection(db, "users"), {
          email: email,
          bio: bio,
          uid: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
        this.$router.push("/home");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        let alert_2 = document.querySelector("#alert_2")
          alert_2.classList.remove("d-none");
          alert_2.innerHTML = errorMessage;
          console.log(alert_2);       

      }
    },
  },
};
</script>

<style></style>
