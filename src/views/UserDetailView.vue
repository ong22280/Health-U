<template>
    <div class="center">


        <div class="container shadow-2xl fade-normal" id="content-user-detail" style="width: 500px">
            <form @submit.prevent="pushInformation">
                <h2 class="mb-3 text-3xl text-center">You information</h2>

                <div class="input">
                    <label for="age">Age</label>
                    <input class="form-control" type="number" v-model="age" name="age" />
                </div>

                <div class="input">
                    <label for="height">Height</label>
                    <input class="form-control" type="number" v-model="height" name="height" />
                </div>

                <div class="input">
                    <label for="weight">Weight</label>
                    <input class="form-control" type="number" v-model="weight" name="weight" />
                </div>

                <div class="input-radio">
                    <div>Gender</div>
                    <input type="radio" id="men" value="Men" v-model="gender" />
                    <label for="Men">Men</label>
                    <input type="radio" id="women" value="Women" v-model="gender" />
                    <label for="Women">Women</label>
                </div>

                <div class="input-checkbox">
                    <div>What food do you not eat</div>

                    <input type="checkbox" id="egg" value="Egg" v-model="allergic" />
                    <label for="egg">Egg</label><br />

                    <input type="checkbox" id="peanuts" value="Peanuts" v-model="allergic" />
                    <label for="peanuts">Peanuts</label><br />

                    <input type="checkbox" id="soybean" value="Soybean" v-model="allergic" />
                    <label for="soybean">Soybean</label><br />

                    <input type="checkbox" id="milk" value="Milk" v-model="allergic" />
                    <label for="milk">Milk</label><br />

                    <input type="checkbox" id="seafood" value="Seafood" v-model="allergic" />
                    <label for="seafood">Seafood</label><br />
                </div>

                <button type="submit" id="register_button" class="mt-4 btn-pers" @click="BMR">
                    Done
                </button>
            </form>
        </div>
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
    setDoc,
    query,
    orderBy,
} from "firebase/firestore";
export default {
    data() {
        return {
            age: "",
            height: "",
            weight: "",
            gender: "",
            allergic: [],
            myCalorie: 0,
        };
    },
    methods: {
        moveToLogin() {
            this.$router.push("/");
        },
        BMR() {
            if (this.gender == "Men") {
                this.myCalorie = 66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age);
            } else {
                this.myCalorie = 655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age);
            }
        },
        async pushInformation() {
            // push add field information to database
            const auth = getAuth();
            const user = auth.currentUser;
            await updateDoc(doc(db, "users", user.uid), {
                age: this.age,
                height: this.height,
                weight: this.weight,
                gender: this.gender,
                allergic: this.allergic,
                myCalorie: this.myCalorie,
            });
            this.$router.push("/home");
        },
    },
};
</script>

<style scoped>
#content-user-detail {
    position: relative;
    top: 40px;
    border: 1px solid lightgray;
    padding: 3rem 2rem;
    border-radius: 5px;
    background: #fefefe;
}

.input-radio {
    margin-bottom: 15px;
}

.input-radio>label {
    text-align: start;
}

.input-radio>input {
    margin: 10px;
}

.input-checkbox {
    margin-bottom: 15px;
}

.input-checkbox>label {
    text-align: start;
}

.input-checkbox>input {
    margin: 8px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
