import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Users from "../views/Users.vue";
import Orders from "../views/Orders.vue";
import Products from "../views/Products.vue";
import LoginAdmin from "../views/LoginAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login-admin",
    name: "LoginAdmin",
    component: LoginAdmin,
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser);
      if(Object.keys(currentUser).length <= 0) {
        next();
      } else {
        next("/admin");
      }
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser);
      if (!Object.keys(currentUser).length) {
        next("/login-admin");
      } else if (currentUser.role === "admin") {
        next();
      }
    },
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview,
      },
      {
        path: "users",
        name: "Users",
        component: Users,
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "products",
        name: "Products",
        component: Products,
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
