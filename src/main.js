import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(createPinia()).use(router).mount('#app');

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA9F9VSha2ecdcuJBBU1_tZDopqjPj8Bvo",
  authDomain: "health-u-4ff8d.firebaseapp.com",
  projectId: "health-u-4ff8d",
  storageBucket: "health-u-4ff8d.appspot.com",
  messagingSenderId: "490002603398",
  appId: "1:490002603398:web:8a76289cfd00d0e171a007"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { app };