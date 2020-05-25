import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/info",
        name: "info",
        meta: { title: "消息" },
        component: () =>
          import(
            /* webpackChunkName: "infolayout" */ "../views/infolayout/index.vue"
          ),
      },
      {
        path: "/todo",
        name: "todo",
        meta: { title: "待办" },
        component: () =>
          import(
            /* webpackChunkName: "todo" */ "../views/todo/index.vue"
          ),
      },
      {
        path: "/app",
        name: "app",
        meta: { title: "应用" },
        component: () =>
          import(
            /* webpackChunkName: "application" */ "../views/application/index.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
