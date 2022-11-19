<template>
  <div class="container shadow-2xl" id="content" style="width: 500px">
    <form @submit.prevent="login">
      <h2 class="mb-3 text-3xl text-center ">Login</h2>
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
      <div class="alternative-option mt-4">
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Login
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_1"
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_1 = document.querySelector("#alert_1");
          alert_1.classList.remove("d-none");
          alert_1.innerHTML = errorMessage;
          console.log(alert_1);
        });
    },
    moveToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}
</style>
