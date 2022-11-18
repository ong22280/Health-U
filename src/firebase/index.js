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


