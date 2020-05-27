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
            /* webpackChunkName: "infolayout" */
            "../views/infolayout/index.vue"
          ),
      },
      {
        path: "/todo",
        name: "todo",
        meta: { title: "待办" },
        component: () =>
          import(
            /* webpackChunkName: "todo" */
            "../views/todo/index.vue"
          ),
      },
      {
        path: "/app",
        name: "app",
        meta: { title: "应用" },
        component: () =>
          import(
            /* webpackChunkName: "application" */
            "../views/application/index.vue"
          ),
      },
      {
        path: "/workbench",
        name: "workbench",
        meta: { title: "工作台" },
        component: () =>
          import(
            /* webpackChunkName: "workbench" */
            "../views/workbench/index.vue"
          ),
      },
      {
        path: "/personnel",
        name: "personnel",
        meta: { title: "人事" },
        component: () =>
          import(
            /* webpackChunkName: "personnel" */
            "../views/personnel/index.vue"
          ),
      },
    ],
  },
  {
    path: "/creatwin",
    name: "creatwin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "creatwin" */ "../views/layout/asideitem/creatwin.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
