import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/userDetail",
      name: "userDetail",
      component: () => import("../views/UserDetailView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      // meta: {
      //   authRequired: true,
      // },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      // meta: {
      //   authRequired: true,
      // },
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/HistoryView.vue"),
      // meta: {
      //   authRequired: true,
      // },
    },
    {
      path: "/navbar",
      name: "navbar",
      component: () => import("../components/Navbar.vue"),
      // meta: {
      //   authRequired: true,
      // },
    },
    {
      path: "/custom",
      name: "custom",
      component: ()=> import("../views/CustomMenu.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const auth = getAuth();

//   if (to.matched.some((record) => record.meta.authRequired)) {
//     if (auth.currentUser) {
//       next();
//     } else {
//       alert("You've must been logged to access this area");
//       router.push("/");
//     }
//   } else {
//     next();
//   }
// });

export default router;
