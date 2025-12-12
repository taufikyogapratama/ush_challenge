import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import DashboardGuest from "../pages/DashboardGuest.vue";
// import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "DashboardGuest",
    component: DashboardGuest,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const isLogin = localStorage.getItem("isLogin");

  if (to.meta.requiresAuth && isLogin !== "true") {
    return next("/login");
  }

  next();
});

export default router;
