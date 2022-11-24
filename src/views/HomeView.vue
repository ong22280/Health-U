<template>
  <div>
    <Navbar />
  </div>
  <div class="flex justify-center mx-10">
    <p class="shadow-9xl animate-charcter-history text-5xl pt-12 font-black">
      What's on menu today?
    </p>
  </div>
  <div class="flex-col py-7">
    <div class="flex justify-center flex-col">
      <span class="flex-1">
        <Food
          class="mb-12 flex justify-center fade-in"
          :name="foods[i].name"
          :calorie="foods[i].calorie"
          :image="foods[i].image"
        ></Food>
      </span>
      <span class="flex justify-center ">
        <p>your calorie : {{ informationUser.myCalorie }}</p>
      </span>
    </div>

    <div class="bottom-position">
      <div class="flex justify-center py-10">
        <div class="mt-2">
          <button
            @click="skip"
            class="text-4xl button-beauty-skip text-white font-bold py-2 px-4 rounded-full"
          >
            SKIP
          </button>
        </div>

        <div class="px-12 mt-2">
          <button
            @click="eat"
            class="text-4xl button-beauty-eat text-white font-bold py-2 px-4 rounded-full"
          >
            EAT
          </button>
        </div>

        <div class="text-center w-24 h-24 bg-lime-600 rounded-full">
          <font-awesome-icon
            @click="increaseLike"
            class="text-5xl mt-5 text-white scale-100 hover:scale-125 ease-in duration-100"
            icon="fa-solid fa-thumbs-up"
          />
        </div>
      </div>

      <div class="flex justify-evenly p-1">
        <div
          class="text-center mt-2 text-2xl text-white font-bold py-2 px-4 rounded-full button-go-to-custom"
        >
          <router-link to="/custom" class="">not on menu?</router-link>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="overCalorie"
    class="fade-normal fixed"
    id="content"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div
        class="modal-content relative flex flex-col w-full pointer-events-auto rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4"
        >
          <h5 class="text-xl font-medium leading-normal" id="exampleModalLabel">
            แคลอรี่เกินกว่าที่กำหนด
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t rounded-b-md"
        >
          <button
            @click="accept"
            type="button"
            class="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFoodStore } from "../stores/randFood.js";
import { useUserInfoStore } from "../stores/userInfo.js";
import Navbar from "../components/Navbar.vue";
import Food from "../components/Food.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../main.js";
import {
  addDoc,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";

export default {
  components: {
    Navbar,
    Food,
  },
  data() {
    return {
      foods: [],
      i: 0,
      age: "",
      height: "",
      weight: "",
      gender: "",
      allergic: [],
      myCalorie: 0,
      trackFood: [],
      informationUser: [],
      leftCalorie: 0,
      overCalorie: false,
    };
  },
  async created() {
    await useUserInfoStore().fetchInformationUser();
    this.informationUser = useUserInfoStore().informationUser;
    this.myCalorie = this.informationUser.myCalorie;
    this.leftCalorie = this.informationUser.leftCalorie;
    this.trackFood = this.informationUser.trackFood;
    console.log(this.leftCalorie);

    await useFoodStore().fetchFood();
    this.foods = useFoodStore().getRandFood;
  },
  methods: {
    increaseLike() {
      this.foods[this.i].like++;
      this.updateFoodLike();
      this.foods[this.i].foodID;
    },
    async updateFoodLike() {
      await updateDoc(doc(db, "foods", this.foods[this.i].foodID), {
        like: this.foods[this.i].like,
      });
    },
    accept() {
      this.overCalorie = false;
    },
    skip() {
      if (this.i < this.foods.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
    },
    eat() {
      console.log("befor", this.leftCalorie);
      if (this.leftCalorie - this.foods[this.i].calorie < 0) {
        this.overCalorie = true;
        return;
      }
      this.trackFood.push(this.foods[this.i].foodID);
      console.log(this.trackFood);
      this.pushTrack();
      if (this.i < this.foods.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
      this.leftCalorie = this.leftCalorie - this.foods[this.i].calorie;
      console.log("after", this.leftCalorie);
    },

    async pushTrack() {
      // push add field information to database
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(this.leftCalorie);
      await updateDoc(doc(db, "users", user.uid), {
        trackFood: this.trackFood,
        leftCalorie: this.leftCalorie,
      });
      //   trackFood: this.trackFood,

      //   myCalorie: this.myCalorie - this.foods[this.i].calorie,
      // });
      // console.log(this.myCalorie);
      // console.log(this.foods[this.i].calorie);
    },
  },
};
</script>

<style scoped>

.content {
  background-color: #f5f5f5;
  height: 10vh;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#content-info {
  position: relative;
  top: 40px;
  border: 1px solid lightgray;
  padding: 3rem 2rem;
  background: #fefefe;
}

.center-icon {
  border: 5px solid;
  display: flex;
  justify-content: center;
}

.bottom-position {
  position: absolute;
  bottom: 60px;
  width: 100%;
}

.button-beauty-eat {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

.button-beauty-eat:hover {
  background-color: #0e8e41;
}

.button-beauty-skip {
  background-color: #f44336; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

.button-beauty-skip:hover {
  background-color: #e60000;
}

.button-go-to-custom {
  background-color: #007dff;
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 28px;
  margin: 4px 2px;
  cursor: pointer;
}

.button-go-to-custom:hover {
  background-color: #0058b1;
}

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

fade-out {
  animation: fade-out 0.5s;
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
